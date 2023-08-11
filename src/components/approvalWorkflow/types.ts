type TReviewType =
  | "cost"
  | "it"
  | "security"
  | "legal"
  | "created-in-erp"
  | "aligned-contract"
  | "order-service";

type TReviewInfo = {
  description: string;
  type: TReviewType;
};

type TStepItemAssignee = {
  id: string;
  name: string;
};

export type TStepItem = {
  id: string;
  name: string;
  reviewInfo: TReviewInfo;
  stepIndex: number;
  stepOrder: number;
  assignee: TStepItemAssignee | null;
};
