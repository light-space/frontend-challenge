import { Approver, AutoApprover } from "./approver";
import { Category } from "./category";

/**
 * Contains current state node within a workflow.
 */
export interface WorkflowNode {
  title: string;
  description: string;
  approverList: Approver[];
  next: WorkflowNode[] | null;
  category: Category;
  // other info such as: isApproved, notificationEmail, canBeSkipped, etc.
}

/**
 * Contains all information related to a workflow.
 */
export class Workflow {
  head: WorkflowNode;
  levels: WorkflowNode[][];

  constructor(head: WorkflowNode) {
    this.head = head;
    this.levels = [[head]];
  }

  addNext(newWorkflowNodes: WorkflowNode[]) {
    // retrieve the latest workflow nodes (that last ones on the same level)
    const latestWorkflowNodes = this.levels.at(-1);

    // copy new nodes in a new array for memory safety
    const nextWorkflowNodes = [...newWorkflowNodes];

    // add new nodes
    latestWorkflowNodes?.forEach((workflowNode) => {
      workflowNode.next = nextWorkflowNodes;
    });
    this.levels.push(nextWorkflowNodes);
  }

  getStepNodes(step: number) {
    const node = this.head;
    while (node) {}
  }

  // other methods, like isComplete for validating if it's completed
}
