

import React from 'react';
import type { SkillCategory, ExperienceItem, Project, EducationItem, AchievementItem, CodingStat } from './types';
import { Award, GraduationCap, Users, Trophy, Code, Github, Linkedin, Mail, Phone, CodeSquare, Puzzle, BrainCircuit, Star, Briefcase, FolderGit2, Braces, Component, Database, Server, Cog, Terminal, GitMerge, Bot, Lamp, FileCode } from 'lucide-react';


export const SOCIAL_LINKS = [
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'GitHub', url: 'https://github.com/RanaJay3101', icon: React.createElement(Github) },
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'LinkedIn', url: 'https://linkedin.com/in/jayrana3101', icon: React.createElement(Linkedin) },
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'LeetCode', url: 'https://leetcode.com/ranajay206', icon: React.createElement(CodeSquare) },
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'Codeforces', url: 'https://codeforces.com/profile/rana_Jay_31', icon: React.createElement(Puzzle) },
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/ranajay206', icon: React.createElement(BrainCircuit) },
];

export const CONTACT_INFO = [
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'Email', value: 'ranajayh3101@gmail.com', href: 'mailto:ranajayh3101@gmail.com', icon: React.createElement(Mail, { size: 20 }) },
  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  { name: 'Phone', value: '+91 9104102578', href: 'tel:+919104102578', icon: React.createElement(Phone, { size: 20 }) },
];

export const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: React.createElement(Code, { className: 'w-4 h-4' }) },
      { name: 'Python', icon: React.createElement(Code, { className: 'w-4 h-4' }) },
      { name: 'JavaScript', icon: React.createElement(Braces, { className: 'w-4 h-4' }) },
      { name: 'TypeScript', icon: React.createElement(Braces, { className: 'w-4 h-4' }) },
      { name: 'C++', icon: React.createElement(Code, { className: 'w-4 h-4' }) },
      { name: 'HTML', icon: React.createElement(FileCode, { className: 'w-4 h-4' }) },
      { name: 'SQL', icon: React.createElement(Database, { className: 'w-4 h-4' }) },
      { name: 'C', icon: React.createElement(Code, { className: 'w-4 h-4' }) },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', icon: React.createElement(Server, { className: 'w-4 h-4' }) },
      { name: 'React', icon: React.createElement(Component, { className: 'w-4 h-4' }) },
      { name: 'Angular', icon: React.createElement(Component, { className: 'w-4 h-4' }) },
      { name: 'Node.js', icon: React.createElement(Server, { className: 'w-4 h-4' }) },
      { name: 'Express.js', icon: React.createElement(Server, { className: 'w-4 h-4' }) },
      { name: 'Tailwind CSS', icon: React.createElement(Component, { className: 'w-4 h-4' }) },
      { name: 'Streamlit', icon: React.createElement(Component, { className: 'w-4 h-4' }) },
      { name: 'LAMP', icon: React.createElement(Lamp, { className: 'w-4 h-4' }) }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: React.createElement(Database, { className: 'w-4 h-4' }) },
      { name: 'MongoDB', icon: React.createElement(Database, { className: 'w-4 h-4' }) },
      { name: 'Google BigQuery', icon: React.createElement(Database, { className: 'w-4 h-4' }) }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: React.createElement(GitMerge, { className: 'w-4 h-4' }) },
      { name: 'VSCode', icon: React.createElement(Terminal, { className: 'w-4 h-4' }) },
      { name: 'MATLAB', icon: React.createElement(Cog, { className: 'w-4 h-4' }) },
      { name: 'Mixpanel', icon: React.createElement(Cog, { className: 'w-4 h-4' }) },
      { name: 'Docker', icon: React.createElement(Cog, { className: 'w-4 h-4' }) },
      { name: 'Jira', icon: React.createElement(Cog, { className: 'w-4 h-4' }) }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Tata Consultancy Services (TCS)',
    date: 'Nov 2024 - Present',
    location: 'GIFT City- Ahmedabad',
    description: [
      'Developed responsive web interfaces using Angular and TypeScript within the DigiGov framework.',
      'Engineered and deployed RESTful APIs using Java Spring Boot for key business operations.',
      'Designed and implemented data-driven dashboards and reports using PostgreSQL.',
      'Enhanced critical modules including Inventory Transfer, MIS Reports, and Payment Integration.'
    ],
    tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs']
  },
  {
    role: 'Full Stack Intern',
    company: 'CIPIO.AI',
    date: 'Feb 2024 - May 2024',
    location: 'Ahmedabad',
    description: [
      'Developed a full-stack automated email system using Python, Angular, and Streamlit.',
      'Conducted data analysis and reporting on PostgreSQL and Google BigQuery.',
      'Integrated Mixpanel for product analytics.',
      React.createElement('div', { className: 'flex items-start mt-1' }, 
        React.createElement(Star, { size: 14, className: 'text-cyan-400 mr-2 mt-1 flex-shrink-0' }), 
        React.createElement('span', null, 'Key Achievement: Reduced manual email handling time by 40% and enhanced data-driven decision-making by 35%.')
      )
    ],
    tech: ['Python', 'Angular', 'Streamlit', 'PostgreSQL', 'Google BigQuery', 'Mixpanel']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Phonebook Application',
    description: 'A robust phonebook application using binary trees for efficient contact management, including adding, deleting, searching, and updating contacts.',
    tech: ['Data Structures', 'Algorithms', 'Java'],
    githubUrl: 'https://github.com/RanaJay3101'
  },
  {
    title: 'Rudhir - The Blood Bank',
    description: 'A web-based platform to facilitate blood donation, organize camps, and enable seamless search for blood donors, streamlining the donation process.',
    tech: ['LAMP Stack', 'PHP', 'MySQL', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/RanaJay3101'
  },
  {
    title: 'CPU & Memory Algorithm Simulation',
    description: 'Implemented four types of CPU processing algorithms (FCFS, SJF, SRTF, Round-Robin) and four memory partition algorithms (First Fit, Next Fit, Worst Fit, Best Fit).',
    tech: ['Python', 'Operating Systems', 'Algorithms'],
    githubUrl: 'https://github.com/RanaJay3101'
  },
  {
    title: 'Suicide Prediction with ML',
    description: 'Predicted suicide risk using various machine learning models such as Linear Regression, K-Nearest Neighbors (KNN), and Decision Tree.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn'],
    githubUrl: 'https://github.com/RanaJay3101'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        institution: 'Nirma University',
        degree: 'B.Tech in Computer Science',
        date: '2020 - 2024',
        location: 'Ahmedabad',
        details: [
            'CGPA: 7.71 / 10.0',
            'Coursework: Data Structures, Algorithms, System Design, Machine Learning'
        ]
    }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
    {
        icon: React.createElement(Trophy, { size: 32, className: "text-cyan-400 mb-4" }),
        title: "Google Kickstart Rank",
        description: "Achieved 1257th rank in Google Kickstart Round E, a competitive programming contest.",
    },
    {
        icon: React.createElement(Award, { size: 32, className: "text-cyan-400 mb-4" }),
        title: "LogicXampify Winner",
        description: "Secured 1st place in LogicXampify, a university-level coding competition at AMS, NU.",
    },
    {
        icon: React.createElement(Users, { size: 32, className: "text-cyan-400 mb-4" }),
        title: "Nirma Volunteaching Movement",
        description: "Provided educational support and guidance to children in rural areas, improving academic performance.",
    },
    {
        icon: React.createElement(GraduationCap, { size: 32, className: "text-cyan-400 mb-4" }),
        title: "ACES Marketing Director",
        description: "Led marketing initiatives and organized successful events, enhancing the organization's visibility.",
    },
];


export const CODING_STATS_DATA: CodingStat[] = [
  {
    platform: 'LeetCode',
    icon: React.createElement(CodeSquare, { className: 'w-8 h-8 mb-2' }),
    url: 'https://leetcode.com/ranajay206',
    stats: [
      { label: 'Problems Solved', value: '500+' },
      { label: 'Contests', value: '15+' },
      { label: 'Max Rating', value: '1850' },
    ],
  },
  {
    platform: 'Codeforces',
    icon: React.createElement(Puzzle, { className: 'w-8 h-8 mb-2' }),
    url: 'https://codeforces.com/profile/rana_Jay_31',
    stats: [
      { label: 'Max Rating', value: '1610 (Specialist)' },
      { label: 'Contests', value: '50+' },
      { label: 'Problems Solved', value: '600+' },
    ],
  },
  {
    platform: 'CodeChef',
    icon: React.createElement(BrainCircuit, { className: 'w-8 h-8 mb-2' }),
    url: 'https://www.codechef.com/users/rana_jay',
     stats: [
      { label: 'Max Rating', value: '1825 (4 Star)' },
      { label: 'Contests', value: '40+' },
      { label: 'Problems Solved', value: '300+' },
    ],
  },
];


export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Coding Profiles', href: '#coding-profiles' },
  { name: 'Education', href: '#education' },
];