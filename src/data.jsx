import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/lt1.jpeg';
import Work2 from './assets/gfg.jpeg';
import Work3 from './assets/github.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sabir',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Akhtar',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Delhi',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21621184010',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'you@mail.com',
  },

  {
    id: 9,
    title: 'Languages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '380+',
    title: 'Question solved  on <br /> Leetcode',
  },

  {
    id: 2,
    no: '1500+',
    title: 'Contest Rating on <br />Leetcode',
  },

  {
    id: 3,
    no: '650+',
    title: 'score on  <br /> GFG',
  },

  {
    id: 4,
    no: '5 ⭐ ',
    title: ' in cpp and python on <br /> HackerRank',
  },
];

export const resume = [
 
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2025',
    title: 'Engineering Degree : <span>VIT-Bhopal</span>',
    desc: 'I am currently pursuing a bachelors degree from Vit-bhopal university in computer science',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'School :<span>Himalya Public Sr. Sec.</span>',
    desc: 'completed my 10th ad 12th from Himalya public (HPSS)',
  },

];



export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Leetcode',
    links:'https://leetcode.com/sabircodes/',

  },

  {
    id: 2,
    img: Work2,
    title: 'GeeksForGeeks',
    links:'https://auth.geeksforgeeks.org/user/sabir_codes/',


    
  },

  {
    id: 3,
    img: Work3,
    title: 'Github',
    links:'https://github.com/sabircodes',

   
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
