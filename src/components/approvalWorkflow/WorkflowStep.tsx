import { WorkflowItem } from "./WorkflowItem";
import { TStepItem } from "./types";
import styles from "./styles.module.css";

/**
 * Drawing lines rules:
 * - if stepIndex zero and single item: render line to the right
 * - if stepIndex > zero and multiple items: render square to the left
 *    - if more columns to right also render square to right
 * - if stepIndex > zero and single item: render line to the left
 *    - if more column to right also render line to the right
 */

type WorkflowStepProps = {
  currentStepIndex: number;
  stepsMap: Map<number, Array<TStepItem>>;
};

export function WorkflowStep({
  currentStepIndex,
  stepsMap,
}: WorkflowStepProps) {
  const items = stepsMap.get(currentStepIndex);
  const currentColumnSize = items?.length ?? 0;
  const nextColumnsItems = stepsMap.get(currentStepIndex + 1);
  const nextColumnSize = nextColumnsItems?.length ?? 0;

  let styleClass = styles.item;
  if (currentStepIndex > 0) {
    styleClass = `${styleClass} ${styles.leftLine}`;
  }

  if (currentStepIndex > 0 && nextColumnSize > 1) {
    styleClass = `${styleClass} ${styles.rightLine}`;
  }

  if (currentStepIndex === 0 && currentColumnSize === 1) {
    styleClass = `${styleClass} ${styles.rightLine}`;
  }

  if (currentStepIndex > 0 && nextColumnSize > 1) {
    styleClass = `${styleClass} ${styles.rightLine}`;
  }

  if (currentStepIndex > 0 && currentColumnSize > 1) {
    styleClass = `${styleClass} ${styles.decorateLeft}`;
    if (nextColumnsItems) {
      styleClass = `${styleClass} ${styles.decorateRight}`;
    }
  }

  return (
    <div className="flex flex-col justify-center" style={{ gap: "4rem" }}>
      {items?.map((item) => (
        <WorkflowItem key={item.id} item={item} className={styleClass} />
      ))}
    </div>
  );
}
