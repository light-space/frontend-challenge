// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  contractExecution,
  fpa,
  itReview,
  legalReview,
  po,
  securityReview,
  vendorOnboarding,
} from "@/data/mockedData";
import { Workflow } from "@/types/workflow";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Workflow>
) {
  const workflow = new Workflow(fpa);
  workflow.addNext([itReview, securityReview, legalReview]);
  workflow.addNext([vendorOnboarding]);
  workflow.addNext([contractExecution, po]);

  res.status(200).json(workflow);
}
