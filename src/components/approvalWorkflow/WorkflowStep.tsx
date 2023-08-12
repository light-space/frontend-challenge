import { useMemo } from "react";
import { WorkflowItem } from "./WorkflowItem";
import { TStepItem } from "../../types";
import { buildWorkflowItemStyles } from "./buildWorkflowItemStyles";

type WorkflowStepProps = {
  currentStepIndex: number;
  items: TStepItem[];
  nextColumnsItems: TStepItem[];
};

export function WorkflowStep({
  currentStepIndex,
  items,
  nextColumnsItems,
}: WorkflowStepProps) {
  const currentColumnSize = items?.length ?? 0;
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
    <ul className="flex flex-col justify-center" style={{ gap: "4rem" }}>
      {items?.map((item) => (
        <WorkflowItem key={item.id} item={item} className={stylesClasses} />
      ))}
    </ul>
  );
}
