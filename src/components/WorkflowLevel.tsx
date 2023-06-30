import { WorkflowNode } from "@/types/workflow";
import WorkflowCard from "./WorkflowCard";
import { Fragment } from "react";

interface Props {
  workflowNodes: WorkflowNode[];
  level: number;
}

function WorkflowLevel({ workflowNodes, level }: Props) {
  const nodesNumber = workflowNodes.length;

  const BeforeLines = ({ index }: { index: number }) => {
    // nodes on first level will never have lines before
    if (level === 0) return <Fragment />;

    return (
      <div className="w-4">
        {/* Left horizontal line */}
        <hr className="absolute w-4 top-1/2" />
        {/* Left-lower vertical line */}
        {index < nodesNumber - 1 && (
          <div className="absolute left-0 top-1/2 -ml-0.5 w-[1px] h-full bg-white" />
        )}
        {/* Left-upper vertical line */}
        {index > 0 && (
          <div className="absolute left-0 bottom-1/2 -ml-0.5 w-[1px] h-full bg-white" />
        )}
      </div>
    );
  };

  const AfterLines = ({
    index,
    workflowNode,
  }: {
    index: number;
    workflowNode: WorkflowNode;
  }) => {
    // if nodes don't have a "next" neighbor then don't render lines
    if (!workflowNode.next) return <Fragment />;

    return (
      <div className="w-4">
        {/* Right horizontal line */}
        <hr className="absolute w-4 top-1/2" />
        {/* Right-lower vertical line */}
        {index < workflowNodes.length - 1 && (
          <div className="absolute right-0 top-1/2 -ml-0.5 w-[1px] h-full bg-white" />
        )}
        {/* Right-upper vertical line */}
        {index > 0 && (
          <div className="absolute right-0 bottom-1/2 -ml-0.5 w-[1px] h-full bg-white" />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      {workflowNodes.map((workflowNode, index) => {
        return (
          <div className="flex relative" key={index}>
            <BeforeLines index={index} />
            <WorkflowCard {...workflowNode} />
            <AfterLines
              index={index}
              workflowNode={workflowNode}
            />
          </div>
        );
      })}
    </div>
  );
}

export default WorkflowLevel;
