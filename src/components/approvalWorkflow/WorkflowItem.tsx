import { TStepItem } from "./types";

type WorkflowItemProps = {
  item: TStepItem;
  className?: string;
};

export function WorkflowItem({ item, className }: WorkflowItemProps) {
  return (
    <div className={className}>
      <div className="">{item.name}</div>
    </div>
  );
}
