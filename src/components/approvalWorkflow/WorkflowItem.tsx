import { MoreHorizontal } from "lucide-react";
import { ReviewIconType } from "./ReviewIconType";
import { TStepItem } from "../../types";
import { UserBadge } from "./UserBadge";

type WorkflowItemProps = {
  item: TStepItem;
  className?: string;
};

export function WorkflowItem({ item, className }: WorkflowItemProps) {
  return (
    <div className={className}>
      <div className="flex flex-col h-full">
        <div className="flex">
          <ReviewIconType type={item.reviewInfo.type} />
          <div className="ml-auto">
            <MoreHorizontal size="1.2em" />
          </div>
        </div>
        <div className="mt-auto">
          <div className="font-bold mb-1">{item.name}</div>
          <div className="text-gray-400 text-xs font-light mb-4">
            {item.reviewInfo.description}
          </div>
          <UserBadge assignee={item.assignee} />
        </div>
      </div>
    </div>
  );
}
