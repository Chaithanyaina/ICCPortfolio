import React from 'react';
import { EducationSectionTitle, EducationTimeline, EducationTimelineItem, EducationTimelineContent, Degree, Institution, GraduationDate } from './Education.styles';

const educationHistory = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'SRM University, Amaravati',
    date: 'Graduated Jun 2025',
    description: 'Focused on software development, algorithms, and data structures. Final year project on machine learning.'
  },
   {
    degree: 'The Complete Web Development Bootcamp',
    institution: 'UDEMY',
    date: 'Completed 2022',
    description: 'Intensive program covering MERN stack (MongoDB, Express, React, Node.js).'
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <EducationSectionTitle>KNOWLEDGE_BASE</EducationSectionTitle>
        <EducationTimeline>
          {educationHistory.map((edu, index) => (
            <EducationTimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <EducationTimelineContent>
                <Degree>{edu.degree}</Degree>
                <Institution>{edu.institution}</Institution>
                <GraduationDate>{edu.date}</GraduationDate>
                <p>{edu.description}</p>
              </EducationTimelineContent>
            </EducationTimelineItem>
          ))}
        </EducationTimeline>
      </div>
    </section>
  );
};

export default Education;