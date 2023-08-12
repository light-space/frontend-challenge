import * as React from "react";
import {
  ArrowRightCircle,
  CircleDollarSign,
  Gavel,
  LucideIcon,
  LucideProps,
  Pencil,
  SendHorizonal,
  Shield,
  Wrench,
} from "lucide-react";
import { TReviewType } from "../../types";

interface IconProps extends LucideProps {
  type: TReviewType;
}

/**
 * Tried using the Nextjs dynamic import approach from lucide docs https://lucide.dev/guide/packages/lucide-react#nextjs-example,
 * however, the app throws an error. Worth checking later.
 */

const iconTypeName: Record<TReviewType, LucideIcon> = {
  cost: CircleDollarSign,
  it: Wrench,
  security: Shield,
  legal: Gavel,
  "created-in-erp": ArrowRightCircle,
  "aligned-contract": Pencil,
  "order-service": SendHorizonal,
};

export function ReviewIconType({ type, ...props }: IconProps) {
  const LucideIcon = iconTypeName[type];
  return (
    <div className="text-sm bg-black rounded-full w-fit p-1.5">
      <LucideIcon size="1.1em" {...props} />
    </div>
  );
}
