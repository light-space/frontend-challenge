import { Workflow, WorkflowLevels } from "@/types";

export function getWorkflowLevels(
  workflow: Workflow
): WorkflowLevels {
  const workflowNodeLevels: WorkflowLevels = [];

  let level = workflow.startingLevel;
  while (level.next) {
    workflowNodeLevels.push(level);
    level = level.next;
  }
  workflowNodeLevels.push(level);

  return workflowNodeLevels;
}
