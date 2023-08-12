import { useMemo } from "react";
import { WorkflowItem } from "./WorkflowItem";
import { TStepItem } from "./types";
import { buildWorkflowItemStyles } from "./buildWorkflowItemStyles";

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

  const stylesClasses = useMemo(
    () =>
      buildWorkflowItemStyles({
        currentStepIndex,
        currentColumnSize,
        nextColumnSize,
      }),
    [currentStepIndex, currentColumnSize, nextColumnSize]
  );

  return (
    <div className="flex flex-col justify-center" style={{ gap: "4rem" }}>
      {items?.map((item) => (
        <WorkflowItem key={item.id} item={item} className={stylesClasses} />
      ))}
    </div>
  );
}
