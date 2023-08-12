// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TStepItem } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const data: TStepItem[] = [
  {
    id: "uuid1",
    name: "FP&A",
    reviewInfo: {
      description: "Assessment of cost-benefit",
      type: "cost",
    },
    stepIndex: 0,
    stepOrder: 0,
    assignee: {
      id: "user id",
      name: "Kristin Watson",
    },
  },
  {
    id: "uuid2",
    name: "IT Review",
    reviewInfo: {
      description: "Assessment of IT risks",
      type: "it",
    },
    stepIndex: 1,
    stepOrder: 0,
    assignee: {
      id: "user id 2",
      name: "Alice Weather",
    },
  },
  {
    id: "uuid3",
    name: "Security Review",
    reviewInfo: {
      description: "Assessment of security risks",
      type: "security",
    },
    stepIndex: 1,
    stepOrder: 1,
    assignee: {
      id: "user id 3",
      name: "Darlene Robertson",
    },
  },
  {
    id: "uuid4",
    name: "Legal Review",
    reviewInfo: {
      description: "Assessment of legal risks",
      type: "legal",
    },
    stepIndex: 1,
    stepOrder: 2,
    assignee: {
      id: "user id 3",
      name: "Darlene Johnson",
    },
  },
  {
    id: "uuid5",
    name: "Vendor onboarding",
    reviewInfo: {
      description: "Vendor created in EPR",
      type: "created-in-erp",
    },
    stepIndex: 2,
    stepOrder: 0,
    assignee: null,
  },
  {
    id: "uuid6",
    name: "Contract Execution",
    reviewInfo: {
      description: "Aligned contract",
      type: "aligned-contract",
    },
    stepIndex: 3,
    stepOrder: 0,
    assignee: {
      id: "user id 12",
      name: "Request Owner",
    },
  },
  {
    id: "uuid7",
    name: "PO",
    reviewInfo: {
      description: "Order service",
      type: "order-service",
    },
    stepIndex: 3,
    stepOrder: 1,
    assignee: {
      id: "user id 432",
      name: "Organisation",
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TStepItem[]>
) {
  res.status(200).json(data);
}
