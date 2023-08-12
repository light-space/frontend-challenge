import { User2 } from "lucide-react";
import { TStepItem } from "./types";

export function UserBadge({ assignee }: { assignee: TStepItem["assignee"] }) {
  if (assignee == null) {
    return (
      <UserAvatarBadge name="Auto">
        <div className="rounded-full bg-black p-1 h-5 w-5 inline-flex justify-center items-center">
          N
        </div>
      </UserAvatarBadge>
    );
  }

  return (
    <UserAvatarBadge name={assignee?.name}>
      <span className="rounded-full bg-green-125 p-1 text-black">
        <User2 size="1em" />
      </span>
    </UserAvatarBadge>
  );
}

function UserAvatarBadge({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-450 p-1 pr-2 w-fit text-xs">
      {children}
      <span className="">{name}</span>
    </div>
  );
}
