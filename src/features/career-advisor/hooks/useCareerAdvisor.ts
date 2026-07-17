import { useMemo } from 'react';
import { careerAdvisorData } from '../data/careerAdvisorData';

export function useCareerAdvisor() {
  return useMemo(() => careerAdvisorData, []);
}
