import { Workflow, WorkflowLevels } from "@/types/workflow";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Suspense from "@/components/Suspense";
import LoadingSpinner from "@/components/LoadingSpinner";
import WorkflowLevel from "@/components/WorkflowLevel";
import { getWorkflowLevels } from "@/utils/workflow";

const inter = Inter({ subsets: ["latin"] });

async function fetchWorkflowNodeGroups(): Promise<WorkflowLevels> {
  const response = await fetch("/api/workflows");
  const workflow: Workflow = await response.json();
  return getWorkflowLevels(workflow);
}

export default function Home() {
  const { data: workflowLevels, isFetching } = useQuery({
    queryKey: ["workflow"],
    queryFn: fetchWorkflowNodeGroups,
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
          {workflowLevels?.map((workflowLevel, index) => (
            <WorkflowLevel
              workflowLevel={workflowLevel}
              levelNumber={index}
              key={index}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
