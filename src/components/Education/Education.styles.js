// Re-exporting from Experience styles to keep components separate but styles consistent
import { SectionTitle, Timeline, TimelineItem, TimelineContent } from '../Experience/Experience.styles';
import styled from 'styled-components';

export const EducationSectionTitle = SectionTitle;
export const EducationTimeline = Timeline;
export const EducationTimelineItem = TimelineItem;
export const EducationTimelineContent = TimelineContent;

export const Degree = styled.h3`
  font-size: 2rem;
`;

export const Institution = styled.h4`
    font-family: var(--font-body);
    font-weight: 400;
    color: var(--color-light-text);
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
`;

export const GraduationDate = styled.span`
  color: var(--color-accent-neon);
  font-size: 1.4rem;
  display: block;
  margin-bottom: 1rem;
`;