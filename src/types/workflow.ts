import { Approver } from "./approver";
import { Category } from "./category";

/**
 * Contains information about a node within a workflow.
 */
export interface WorkflowNode {
  title: string;
  description: string;
  approverList: Approver[];
  category: Category;
}
export type WorkflowNodes = WorkflowNode[];

/**
 * Workflow Level which contains Workflow Nodes that can be approved in parallel.
 */
export interface WorkflowLevel {
  nodes: WorkflowNodes;
  next: WorkflowLevel | null;
}
export type WorkflowLevels = WorkflowLevel[];

/**
 * Contains all information related to a workflow.
 */
export class Workflow {
  startingLevel: WorkflowLevel;

  constructor(nodes: WorkflowNodes) {
    this.startingLevel = { nodes, next: null };
  }

  addNext(nodes: WorkflowNodes) {
    const newLevel: WorkflowLevel = { nodes, next: null };
    this.getLastLevel().next = newLevel;
  }

  getLastLevel(): WorkflowLevel {
    let lastLevel = this.startingLevel;
    while (lastLevel.next) {
      lastLevel = lastLevel.next;
    }
    return lastLevel;
  }
}
