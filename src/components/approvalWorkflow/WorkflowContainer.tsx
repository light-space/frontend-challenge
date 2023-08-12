import { WorkflowStep } from "./WorkflowStep";
import { TStepItem } from "./types";
import styles from "./styles.module.css";

const schema: TStepItem[] = [
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

export function WorkflowContainer() {
  const stepsMap = generateStepsMap(schema);
  const steps = Array.from(stepsMap);

  return (
    <div className="flex" style={{ gap: "74px" }}>
      {steps.map((_, index) => (
        <WorkflowStep
          key={`WorkflowStep_${index}`}
          currentStepIndex={index}
          stepsMap={stepsMap}
        />
      ))}
    </div>
  );
}

function generateStepsMap(schema: TStepItem[]) {
  const stepsMap = new Map();
  for (let item of schema) {
    if (stepsMap.has(item.stepIndex)) {
      const items = stepsMap.get(item.stepIndex);
      stepsMap.set(item.stepIndex, items.concat(item));
    } else {
      stepsMap.set(item.stepIndex, [item]);
    }
  }
  return stepsMap;
}
