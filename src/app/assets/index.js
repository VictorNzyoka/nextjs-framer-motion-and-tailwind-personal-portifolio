// src/app/assets/index.js
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon';
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon';
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';

export const heroIcons = [
  <InstagramLineIcon key="instagram" size={24} />,
  <FacebookCircleLineIcon key="facebook" size={24} />,
  <DribbbleLineIcon key="dribbble" size={24} />,
  <YoutubeLineIcon key="youtube" size={24} />,
  <GithubLineIcon key="github" size={24} />,
];

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon';
import GroupLineIcon from 'remixicon-react/GroupLineIcon';
import AwardFillIcon from 'remixicon-react/AwardFillIcon';
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon';
import EyeLineIcon from 'remixicon-react/EyeLineIcon';  // Added view icon

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon key="github-repos" />,
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon key="projects" />,
  },
  {
    title: 'Satisfied clients',
    amount: 176,
    icon: <GroupLineIcon key="clients" />,
  },
  {
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon key="awards" />,
  },
];

export const downloadIcon = <DownloadLineIcon key="download" />;
export const arrowLeftIcon = <ArrowLeftSFillIcon key="arrow-left" />;
export const viewIcon = <EyeLineIcon key="view" />;  // Added view icon export
export const aboutText = 
  "Hi, I'm Victor, i have a deep passion for IT, specializing in both software development and machine learning.I have experience creating responsive and visually engaging web applications using HTML, CSS, JavaScript, React, and Next.js,Nodejs.I’m passionate about building solutions that seamlessly combine functionality and design, ensuring both a smooth user experience and technical efficiency."
// End of About Me


export const experienceData = [
  {
    year: 2015,
    title: 'K.C.P.E',
    education: [
      'K.C.P.E (2015) - Kitende Primary School' 
    ],
    experience: [
       'Gained foundational skills in basic subjects.' 
    ],
  },
  {
    year: 2021,
    title: 'K.C.S.E',
    education: [
       'K.C.S.E (2021) - Ndolo Boys Secondary School' 
    ],
    experience: [
      'Built a strong foundation in sciences, mathematics, and computer studies.' 
    ],
  },
  {
    year: 2024,
    title: 'Bachelor of Science in Information Technology (Expected)',
    education: [
       'Bachelor of Science in Information Technology (Expected 2024) - Dedan Kimathi University of Technology' 
    ],
    experience: [
        'Advanced IT Courses: Data structures, algorithms, databases, and software engineering principles.' ,
         'Independent Projects: Worked on several independent projects to strengthen technical skills.' 
    ],
  },
];

export const skillsData = [
  {
    name: 'Nexjs',
    icon: '/skills/nextjs-icon.webp',
  },
  {
    name: 'Nodejs',
    icon: '/skills/nodejs-icon.webp',
  },
  {
    name: 'React',
    icon: '/skills/react.webp',
  },
  {
    name: 'PHP',
    icon: '/skills/PHP-Logo-PNG.webp',
  },
  {
    name: 'Laravel',
    icon: '/skills/laravel.webp',
  },
  {
    name: 'HTML',
    icon: '/skills/html-1.webp',
  },
  {
    name: 'CSS',
    icon: '/skills/css.webp',
  },
  {
    name: 'Python',
    icon: '/skills/Python.webp',
  },
  {
    name: 'Django',
    icon: '/skills/django.webp',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/motion.webp',
  },
  {
    name: 'Tailwind',
    icon: '/skills/tailwind.webp',
  },
  {
    name: 'Mysql',
    icon: '/skills/mysql.webp',
  },
  {
    name: 'Postgress',
    icon: '/skills/PostgreSQL.webp',
  },
  {
    name: 'MongoDB',
    icon: '/skills/MongoDB-Logo.webp',
  },
  {
    name: 'Java',
    icon: '/skills/java.webp',
  },
];
