import { TStepItem } from "./types";

export function WorkflowItem({ item }: { item: TStepItem }) {
  return (
    <div
      className="bg-black-925 rounded-xl p-4"
      style={{ width: "213px", height: "177px" }}
    >
      {item.name}
    </div>
  );
}
