export async function fetchWorkflowItems() {
  const res = await fetch("/api/approval-workflow");
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return res.json();
}
