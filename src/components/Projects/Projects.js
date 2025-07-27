import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, ProjectsGrid, ProjectCard, ProjectImage, ProjectInfo, ProjectTitle, ProjectDescription, ProjectLinks } from './Projects.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Placeholder projects - replace with your own
const projectData = [
  {
    title: 'FinGenius: Smart Finance Tracker',
    description: 'Built a real-time finance dashboard using the MERN stack with interactive charts and Tailwind CSS. Integrated Google Gemini API to provide users with personalized AI-driven financial insights. Automated CI/CD workflows using GitHub Actions and Docker, and secured backend with JWT authentication.',
    image: 'https://placehold.co/400x200/0a0a1a/00f7ff?text=Project+Alpha', // <-- UPDATED URL
    github: 'https://github.com/Chaithanyaina/FinGenius',
    live: 'https://fin-genius-topaz.vercel.app',
  },
  {
    title: 'GEMINI AI-Powered Job Portal',
    description: 'Developed a full-featured job portal using the PERN stack with dual roles for job seekers and employers. Integrated an AI Resume Analyzer with Google Gemini API, improving application relevance and recruiter efficiency. Supported over 1,000 concurrent API requests and scaled storage using Cloudinary.',
    image: 'https://placehold.co/400x200/0a0a1a/00f7ff?text=Project+Beta', // <-- UPDATED URL
    github: 'https://github.com/Chaithanyaina/TheNewJobPortal',
    live: 'https://the-new-job-portal.vercel.app',
  },
   {
    title: 'Smart Traffic Surveillance System',
    description: 'Engineered a federated learning-based surveillance system using YOLOv8 and Flask for privacy-preserving vehicle detection. Trained models across multiple nodes with Differential Privacy and achieved 95.8% mAP@50. Enabled real-time, high-resolution inference for dense traffic monitoring.',
    image: 'https://placehold.co/400x200/0a0a1a/00f7ff?text=Project+Gamma', // <-- UPDATED URL
    github: 'https://github.com/Chaithanyaina/traffic-surveillance',
    live: 'github.com/Chaithanyaina',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <SectionTitle>PROJECTS_ARCHIVE</SectionTitle>
        <ProjectsGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 0 25px rgba(0, 247, 255, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </section>
  );
};

export default Projects;