import WorkflowCard from "@/components/WorkflowCard";
import { Workflow, WorkflowNode } from "@/types/workflow";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Suspense from "@/components/Suspense";
import LoadingSpinner from "@/components/LoadingSpinner";
import WorkflowLevel from "@/components/WorkflowLevel";

const inter = Inter({ subsets: ["latin"] });

const fetchWorkflowSteps = async () => {
  const response = await fetch("/api/workflows");
  const workflow: Workflow = await response.json();
  // await new Promise((r) => setTimeout(r, 500));
  return workflow;
};

export default function Home() {
  const { data: workflow, isFetching } = useQuery({
    queryKey: ["workflow"],
    queryFn: fetchWorkflowSteps,
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[#222222] ${inter.className}`}
    >
      <Suspense
        isLoading={isFetching}
        fallback={<LoadingSpinner />}
      >
        <div className="flex items-center justify-center">
          {workflow?.levels?.map((workflowNodes, index) => (
            <WorkflowLevel
              workflowNodes={workflowNodes}
              level={index}
              key={index}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
