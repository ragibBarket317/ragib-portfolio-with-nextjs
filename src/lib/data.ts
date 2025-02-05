export const skills = {
  frontend: [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Tailwind CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
  ],
  others: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Axios', icon: 'axios' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Vercel', icon: 'vercel' },
  ],
}

export const projects = [
  {
    title: 'Cloth Store',
    description:
      'The Cloth Store project is a full-stack web application designed to provide users with a seamless shopping experience.',
    image: '/cloth_store.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    demoLink: 'https://cloth-store-smoky.vercel.app',
    sourceLink: 'https://github.com/ragibBarket317/cloth-store',
  },
  {
    title: 'Expense Tracker App',
    description:
      'The Expense Tracker Application is a user-friendly web application designed to help users manage their budgets and track expenses effectively',
    image: '/expense-tracker.png',
    tags: ['Next.js', 'Redux', 'Node.js', 'Express.js', 'Mongodb'],
    demoLink: 'https://expense-tracker-ecru-six.vercel.app',
    sourceLink:
      'https://github.com/ragibBarket317/expense-tracker-app-with-nextjs',
  },
  {
    title: 'Weather Dashboard',
    description:
      'This is the weather dashboard project, which is a web application that provides real-time weather information for a location.',
    image: '/weather.png',
    tags: ['React', 'OpenWeather API'],
    demoLink: '#',
    sourceLink: '#',
  },
]

export const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Heydev',
    duration: 'March 2022 – October 2022',
    description: [
      'Developed responsive and interactive user interfaces using React.js, adhering to modern best practices and reusable component design.',
      'Collaborated with designers and backend developers to create seamless RESTful API integrations.',
      'Utilized React Router for navigation and dynamic routing across the application.',
    ],
  },
  {
    title: 'Working For Freelance Project',
    company: 'My Clinic - Dashboard',
    duration: 'March 2024 - July 2024',
    description: [
      'Designed and developed a user-friendly dashboard interface with advanced patient management features, including data visualization (charts) and export functionalities.',
      'Built critical functionalities such as profile updates, document management, theme customization (dark mode, color options), and multi-language support.',
      'Integrated REST APIs for seamless front-end and back-end communication.',
    ],
  },
]

export const education = [
  {
    institution: 'Prime University',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    duration: '2022 - Present',
    content:
      'I am pursuing a Bachelor of Science in Computer Science and Engineering at Prime University in Dhaka',
  },
  {
    institution: 'Lalmonirhat Govt. College',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2016 - 2018',
    content:
      'I completed my class 12 high school education at Lalmonirhat Govt. College, Lalmonirhat, where I studied in Science group.',
  },
]
