import { useEffect, useMemo, useState } from "react";
import { WorkflowStep } from "./WorkflowStep";
import { TStepItem } from "../../types";
import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkflowItems } from "@/services/fetchWorkflowItems";

export function WorkflowContainer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["workflowItems"],
    queryFn: fetchWorkflowItems,
  });

  const stepsMap = !isLoading && data != null ? generateStepsMap(data) : null;

  const steps = useMemo(() => {
    if (stepsMap == null) {
      return [];
    }
    return Array.from(stepsMap);
  }, [stepsMap]);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Something went wrong :(";
  }

  return (
    <div className={styles.stepContainer}>
      {steps.map((_, index) => {
        const items = stepsMap?.get(index);
        const nextColumnsItems = stepsMap?.get(index + 1);

        return (
          <WorkflowStep
            key={`WorkflowStep_${index}`}
            currentStepIndex={index}
            items={items}
            nextColumnsItems={nextColumnsItems}
          />
        );
      })}
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
