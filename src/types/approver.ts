export enum ApproverTypes {
  Auto = "Auto",
  Person = "Person",
  Dynamic = "Dynamic",
}

export enum MacroTypes {
  RequestOwner = "Request Owner",
  Organization = "Organization",
}

export type AutoApprover = {
  type: ApproverTypes.Auto;
};

type HumanApprover = {
  type: ApproverTypes.Person;
  name: string;
};

type DynamicApprover = {
  type: ApproverTypes.Dynamic;
  macro: MacroTypes;
};

export type Approver =
  | AutoApprover
  | HumanApprover
  | DynamicApprover;
