import { Category } from "@/types/category";
import {
  ArrowRightCircle,
  CircleDollarSign,
  Gavel,
  Pencil,
  Send,
  Shield,
  Wrench,
} from "lucide-react";
import React from "react";

interface Props {
  category: Category;
  className?: string;
}

function CategoryIcon({ category, className }: Props) {
  switch (category) {
    case Category.Financial:
      return <CircleDollarSign className={className} />;
    case Category.IT:
      return <Wrench className={className} />;
    case Category.Security:
      return <Shield className={className} />;
    case Category.Legal:
      return <Gavel className={className} />;
    case Category.Vendor:
      return <ArrowRightCircle className={className} />;
    case Category.Requester:
      return <Pencil className={className} />;
    case Category.ProjectOwner:
      return <Send className={className} />;
  }
}

export default CategoryIcon;
