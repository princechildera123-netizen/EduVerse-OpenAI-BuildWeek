export type CareerProfile = { subjects: string[]; interests: string[]; skills: string[]; personality: string; academicPerformance: string };
export type CareerMatch = { title: string; match: number; reason: string; salary: string; growth: string; courses: string[]; requiredSkills: string[] };
export type CareerRoadmapStep = { stage: string; action: string; outcome: string };
export type CareerAdvisorData = { profile: CareerProfile; matches: CareerMatch[]; roadmap: CareerRoadmapStep[] };
