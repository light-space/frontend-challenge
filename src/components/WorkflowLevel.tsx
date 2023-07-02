import { Fragment } from "react";
import { WorkflowLevel } from "@/types/workflow";
import WorkflowCard from "./WorkflowCard";

interface Props {
  workflowLevel: WorkflowLevel;
  levelNumber: number;
}

function WorkflowLevel({
  workflowLevel,
  levelNumber,
}: Props) {
  const nodesNumber = workflowLevel.nodes.length;

  const BeforeLines = ({ index }: { index: number }) => {
    // nodes on first level will never have lines before
    if (levelNumber === 0) return <Fragment />;

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

  const AfterLines = ({ index }: { index: number }) => {
    // if nodes don't have a "next" neighbor then don't render lines
    if (!workflowLevel.next) return <Fragment />;

    return (
      <div className="w-4">
        {/* Right horizontal line */}
        <hr className="absolute w-4 top-1/2" />
        {/* Right-lower vertical line */}
        {index < nodesNumber - 1 && (
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
      {workflowLevel.nodes.map((workflowNode, index) => {
        return (
          <div className="flex relative" key={index}>
            <BeforeLines index={index} />
            <WorkflowCard {...workflowNode} />
            <AfterLines index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default WorkflowLevel;
