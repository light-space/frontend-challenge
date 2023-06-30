import { WorkflowNode } from "@/types/workflow";
import {
  MoreHorizontal,
  UserCircle,
  Wrench,
} from "lucide-react";
import React from "react";
import CategoryIcon from "./CategoryIcon";
import ApproverBadge from "./ApproverBadge";

// Note: still unsure if I should split into multiple components and maybe create
// a "features" folder for this Card component where I add them.
// Same for "Workflow Level" and "WorkflowActor"

function WorkflowCard({
  title,
  description,
  approverList,
  category,
}: WorkflowNode) {
  return (
    <div className="flex flex-col bg-[#2E2E2E] w-56 h-44 rounded-2xl shadow p-4">
      {/* Icons */}
      <div className="flex">
        <CategoryIcon
          className="bg-[#1A1A1A] rounded-full p-1"
          category={category}
        />
        <div className="flex-1" />
        <MoreHorizontal />
      </div>

      {/* Title + description */}
      <div className="flex-1">
        <div className="mt-10">{title}</div>
        <div className="text-xs text-[#B7B7B7]">
          {description}
        </div>
      </div>

      {/* Badges */}
      <div className="flex">
        {approverList.map((approver, index) => (
          <ApproverBadge approver={approver} />
        ))}
      </div>
    </div>
  );
}

export default WorkflowCard;
