import { WorkflowItem } from "./WorkflowItem";
import { TStepItem } from "./types";

export function WorkflowStep({ items }: { items: TStepItem[] }) {
  return (
    <div className="flex flex-col justify-center" style={{ gap: "4rem" }}>
      {items.map((item) => (
        <WorkflowItem key={item.id} item={item} />
      ))}
    </div>
  );
}
