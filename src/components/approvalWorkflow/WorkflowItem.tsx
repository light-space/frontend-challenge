import { TStepItem } from "./types";
import { HTMLAttributes } from "react";

type WorkflowItemProps = {
  item: TStepItem;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function WorkflowItem({ item, className }: WorkflowItemProps) {
  return <div className={className}>{item.name}</div>;
}
