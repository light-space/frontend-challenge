import { Approver, ApproverTypes } from "@/types";
import { UserCircle } from "lucide-react";
import NextIcon from "./NextIcon";

interface Props {
  approver: Approver;
}

function ApproverBadge({ approver }: Props) {
  function Icon() {
    if (approver.type === ApproverTypes.Auto) {
      return (
        <NextIcon
          size="15px"
          className="bg-white text-black rounded-full"
        />
      );
    }
    return (
      <UserCircle
        size="15px"
        className="bg-green-200 text-black rounded-full"
      />
    );
  }

  function DisplayName() {
    switch (approver.type) {
      case ApproverTypes.Auto:
        return "Auto";
      case ApproverTypes.Dynamic:
        return approver.macro;
      case ApproverTypes.Person:
        return approver.name;
    }
  }

  return (
    <div className="flex gap-1 bg-[#4F4F4F] py-1 px-1.5 text-xs rounded-2xl">
      <Icon />
      <DisplayName />
    </div>
  );
}

export default ApproverBadge;
