import React from 'react';
import Section from './Section';
import { UserRound } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About" icon={<UserRound size={16}/>}>
      <p className="mb-4">
        Back in my early days of exploring computers, I discovered a passion for making things work and solving puzzles, which naturally led me to the world of software development. My journey has taken me from academic projects in university to a professional role at a leading tech consultancy.
      </p>
      <p className="mb-4">
        I specialize in full-stack development, with a strong focus on creating robust backend systems using technologies like Java with Spring Boot and efficient front-end interfaces with Angular and React. I thrive on the challenge of turning complex problems into elegant, scalable solutions.
      </p>
      <p>
        When I'm not coding, I enjoy participating in competitive programming challenges, which helps me keep my problem-solving skills sharp. I'm also passionate about contributing to my community and exploring new advancements in machine learning and system design.
      </p>
    </Section>
  );
};

export default About;