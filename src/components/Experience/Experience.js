import React from 'react';
import { SectionTitle, Timeline, TimelineItem, TimelineContent, JobTitle, Company, Date } from './Experience.styles';

const experiences = [
  {
    title: 'Technical Trainee and DSA Educator',
    company: 'Physicswallah',
    date: 'Nov 2024 - Jan 2025',
    description: 'I created and curated technical content on the MERN stack, Data Structures, and Algorithms for over 300 students, developing coding exercises and tutorials to strengthen problem-solving skills. I collaborated with cross-functional teams to design structured educational materials, reviewed and designed practice problems to enhance DSA proficiency, and researched best practices in web development and backend technologies to deliver high-quality, impactful learning resources.'
  },
  {
    title: 'Python Django Project Intern',
    company: 'APSSDC',
    date: 'Jun 2023 - Aug 2024',
    description: 'Built a Car Servicing Management System using Python, Django, SQL, and MongoDB with a user-friendly interface for booking and tracking services. Implemented role-based authentication and optimized backend for handling 50+ concurrent requests. Ensured responsive design and efficient database integration for smooth user experience.'
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <SectionTitle>SERVICE_RECORD</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <TimelineContent>
                <JobTitle>{exp.title}</JobTitle>
                <Company>{exp.company}</Company>
                <Date>{exp.date}</Date>
                <p>{exp.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;