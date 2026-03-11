import { ExperienceItemType } from "@/components/work-experience/work-experience";
import { BriefcaseBusinessIcon } from "lucide-react";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "freelance",
    companyName: "Фриланс",
    positions: [
      {
        id: "frontend",
        title: "Фуллстек разработчик",
        employmentPeriod: "11.2025 — настоящее",
        employmentType: "Подработка",
        icon: BriefcaseBusinessIcon,
        skills: ["NextJS", "TypeScript", "Postgresql", "Docker", "Clickhouse", "Redis"],
      },
    ]
  },
  {
    id: "reservia",
    companyName: "Reservia",
    positions: [
      {
        id: "frontend",
        title: "Фронтенд разработчик",
        employmentPeriod: "08.2024 — 11.2025",
        employmentType: "Проектная работа",
        icon: BriefcaseBusinessIcon,
        skills: ["NextJS", "TypeScript"],
      },
    ],
    isCurrentEmployer: false,
  },
]
