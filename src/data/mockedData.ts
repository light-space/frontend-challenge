import {
  WorkflowNode,
  ApproverTypes,
  MacroTypes,
} from "@/types";
import { Category } from "@/types/category";

export const fpa: WorkflowNode = {
  title: "FP&A",
  description: "Assessment of cost-benefit",
  approverList: [
    {
      type: ApproverTypes.Person,
      name: "Kristin Watson",
    },
  ],
  next: null,
  category: Category.Financial,
};

export const itReview: WorkflowNode = {
  title: "IT Review",
  description: "Assessment of IT risks",
  approverList: [
    {
      type: ApproverTypes.Person,
      name: "Alice Weather",
    },
  ],
  next: null,
  category: Category.IT,
};

export const securityReview: WorkflowNode = {
  title: "Security Review",
  description: "Assessment of security risks",
  approverList: [
    {
      type: ApproverTypes.Person,
      name: "Darlene Robertson",
    },
  ],
  next: null,
  category: Category.Security,
};

export const legalReview: WorkflowNode = {
  title: "Legal Review",
  description: "Assessment of legal risks",
  approverList: [
    {
      type: ApproverTypes.Person,
      name: "Darlene Johnson",
    },
  ],
  next: null,
  category: Category.Legal,
};

export const vendorOnboarding: WorkflowNode = {
  title: "Vendor Onboarding",
  description: "Vendor created in ERP",
  approverList: [
    {
      type: ApproverTypes.Auto,
    },
  ],
  next: null,
  category: Category.Vendor,
};

export const contractExecution: WorkflowNode = {
  title: "Contract Execution",
  description: "Aligned contract",
  approverList: [
    {
      type: ApproverTypes.Dynamic,
      macro: MacroTypes.RequestOwner,
    },
  ],
  next: null,
  category: Category.Requester,
};

export const po: WorkflowNode = {
  title: "PO",
  description: "Order service",
  approverList: [
    {
      type: ApproverTypes.Dynamic,
      macro: MacroTypes.Organization,
    },
  ],
  next: null,
  category: Category.ProjectOwner,
};
