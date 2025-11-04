
import type { SkillCategory, ExperienceItem, Project, EducationItem } from './types';

export const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java' }, { name: 'Python' }, { name: 'JavaScript' }, { name: 'TypeScript' },
      { name: 'C++' }, { name: 'HTML' }, { name: 'SQL' }, { name: 'C' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot' }, { name: 'React' }, { name: 'Angular' }, { name: 'Node.js' },
      { name: 'Express.js' }, { name: 'Tailwind CSS' }, { name: 'Streamlit' }, { name: 'LAMP' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'Google BigQuery' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git' }, { name: 'VSCode' }, { name: 'MATLAB' }, { name: 'Mixpanel' }
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
      'Developed a full-stack automated email system using Python, Angular, and Streamlit, reducing manual handling time by 40%.',
      'Conducted data analysis and reporting on PostgreSQL and Google BigQuery.',
      'Integrated Mixpanel for product analytics, enhancing data-driven decision-making by 35%.'
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
            '12th: 99.46 PR | 10th: 99.76 PR'
        ]
    }
];

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];
