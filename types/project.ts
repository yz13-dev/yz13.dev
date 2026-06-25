
export type ProjectStage = "in-dev" | "in-progress" | "in-production";

export type Project = {
  id: string;
  name: string;
  year: number;
  image: string;
  stage?: ProjectStage | null;
  domain?: string | null;
  link?: string | null;
};
