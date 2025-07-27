import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaDocker, FaPython, FaDatabase
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiMysql, SiExpress, SiRedux, SiTailwindcss,
  SiBootstrap, SiJenkins, SiTensorflow, SiPytorch, SiNumpy, SiPandas,
  SiOpencv, SiGithubactions, SiCplusplus, SiVercel, SiRender, SiFlask, SiTypescript
} from 'react-icons/si';
import { SectionTitle, SkillsGrid, SkillCard } from './Skills.styles';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'Jenkins', icon: <SiJenkins /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Render', icon: <SiRender /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  },
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionTitle>SKILL_MATRIX</SectionTitle>
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              variants={itemVariants}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </section>
  );
};

export default Skills;