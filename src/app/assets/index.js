// src/app/assets/index.js
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

export const heroIcons = [
  <InstagramLineIcon size={24} />,
  <FacebookCircleLineIcon size={24} />,
  <DribbbleLineIcon size={24} />,
  <YoutubeLineIcon size={24} />,
  <GithubLineIcon size={24} />
]

// About Me
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
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied clients',
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon />,
  },
];

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;
export const viewIcon = <EyeLineIcon />;  // Added view icon export
export const aboutText = 
  "Hi, I'm Victor, i have a deep passion for IT, specializing in both software development and machine learning.I have experience creating responsive and visually engaging web applications using HTML, CSS, JavaScript, React, and Next.js,Nodejs.I’m passionate about building solutions that seamlessly combine functionality and design, ensuring both a smooth user experience and technical efficiency."
// End of About Me


export const experienceData = [
  {
    year: 2015,
    title: 'K.C.P.E',
    education: [
      'K.C.P.E (2015) - Kitende Primary School',
    ],
    experience: [
      'Gained foundational skills in basic subjects.',
    ],
  },
  {
    year: 2021,
    title: 'K.C.S.E',
    education: [
      'K.C.S.E (2021) - Ndolo Boys Secondary School',
    ],
    experience: [
      'Built a strong foundation in sciences, mathematics, and computer studies.',
    ],
  },
  {
    year: 2024,
    title: 'Bachelor of Science in Information Technology (Expected)',
    education: [
      'Bachelor of Science in Information Technology (Expected 2024) - Dedan Kimathi University of Technology',
    ],
    experience: [
      'Advanced IT Courses: Data structures, algorithms, databases, and software engineering principles.',
      'Independent Projects: Worked on several independent projects to strengthen technical skills.',
    ],
  },
  // {
  //   year: 2024,
  //   title: 'Maize Plant Disease Detection',
  //   education: [
  //     'Research in machine learning and mobile development techniques.',
  //   ],
  //   experience: [
  //     'Developed a mobile app using machine learning to help farmers detect maize plant diseases from plant images.',
  //     'Utilized Python, TensorFlow, and Java for development.',
  //     'Gained experience in integrating machine learning models into mobile applications.',
  //   ],
  // },
  // {
  //   year: 2023,
  //   title: 'Mess Management System',
  //   education: [
  //     'Coursework in web development and database management.',
  //   ],
  //   experience: [
  //     'Designed and developed a web-based application for Dedan Kimathi University\'s mess management.',
  //     'Implemented features for menu planning, inventory management, and online ordering using HTML, CSS, JavaScript, and PHP.',
  //     'Gained hands-on experience in full-stack web development.',
  //   ],
  // },
  // {
  //   year: 2023,
  //   title: 'Job Listings Application',
  //   education: [
  //     'Studied backend development with Laravel and MySQL.',
  //   ],
  //   experience: [
  //     'Developed a job listings application using Laravel where users can register, login, create, and manage job listings.',
  //     'Implemented features like user authentication, job listings management, image upload, search, and filter functionality.',
  //     'Enhanced understanding of PHP and Laravel framework for dynamic web applications.',
  //   ],
  // },
  // {
  //   year: 2022,
  //   title: 'Car Listing Application',
  //   education: [
  //     'Learned about Java application development and Firebase database integration.',
  //   ],
  //   experience: [
  //     'Developed a car listing application in Java that allows users to browse and manage car listings.',
  //     'Implemented features such as car details management, search functionality, and user authentication.',
  //     'Gained experience in data persistence and user authentication in Java applications.',
  //   ],
  // },
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

