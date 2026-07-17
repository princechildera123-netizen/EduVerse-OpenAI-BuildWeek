import type { CareerAdvisorData } from '../types/careerAdvisor';

export const careerAdvisorData: CareerAdvisorData = {
  profile: {
    subjects: ['Biology', 'Mathematics', 'Computer Science'],
    interests: ['Healthcare innovation', 'Problem solving', 'Helping people'],
    skills: ['Analytical thinking', 'Research', 'Communication'],
    personality: 'Curious, steady, collaborative',
    academicPerformance: 'Strong science performance with improving math confidence',
  },
  matches: [
    { title: 'Biomedical Engineer', match: 94, reason: 'Combines biology, math, design, and human impact.', salary: '$78k–$128k', growth: 'High growth outlook', courses: ['Biomedical Engineering', 'Mechanical Engineering', 'Biotechnology'], requiredSkills: ['Calculus', 'Biology', 'CAD basics', 'Research methods'] },
    { title: 'Data Scientist in Healthcare', match: 88, reason: 'Uses statistics and computing to improve patient outcomes.', salary: '$92k–$155k', growth: 'Very high growth outlook', courses: ['Data Science', 'Computer Science', 'Health Informatics'], requiredSkills: ['Python', 'Statistics', 'Data visualization', 'Ethics'] },
    { title: 'Clinical Research Coordinator', match: 81, reason: 'Matches communication strengths and science curiosity.', salary: '$55k–$88k', growth: 'Stable growth outlook', courses: ['Biology', 'Public Health', 'Clinical Research'], requiredSkills: ['Scientific writing', 'Organization', 'Data collection', 'Patient communication'] },
  ],
  roadmap: [
    { stage: 'Secondary school', action: 'Prioritize biology, mathematics, and computing projects.', outcome: 'Build a strong STEM transcript and project portfolio.' },
    { stage: 'University preparation', action: 'Research programs, entry requirements, scholarships, and internship options.', outcome: 'Create a focused university shortlist.' },
    { stage: 'University years', action: 'Complete labs, research placements, and technical skill certifications.', outcome: 'Develop evidence for internships and graduate roles.' },
    { stage: 'Career launch', action: 'Apply to internships, mentorship programs, and entry-level roles.', outcome: 'Transition into a career pathway with measurable growth.' },
  ],
};
