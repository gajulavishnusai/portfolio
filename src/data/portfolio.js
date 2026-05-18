export const profile = {
  name: 'Gajula Vishnu Sai',
  initials: 'GVS',
  // Add your photo as public/profile.jpg (or .png and update the path below)
  photo: '/profile.jpg',
  photoFallback: '/profile-placeholder.svg',
  role: 'Aspiring Frontend Developer',
  tagline:
    'B.E. Computer Science student building responsive web apps with HTML, CSS, JavaScript, and React.',
  email: 'gajulavishnusai@gmail.com',
  phone: '9182849375',
  phoneHref: 'tel:+919182849375',
  location: 'Chennai, India',
  about: [
    'I am a Computer Science and Engineering student at R.M.K College of Engineering and Technology, Chennai, with a strong interest in frontend development and building user-friendly web experiences.',
    'I work with HTML5, CSS3, and JavaScript to create interactive projects — from e-commerce flows with local storage to quiz apps with timers and score tracking. I am also skilled in Java, C++, and MySQL.',
    'I hold certifications in frontend development, Java fundamentals, and Oracle Cloud Infrastructure, and I am eager to contribute to web development roles and grow as a developer.',
  ],
  highlights: [
    { value: '2', label: 'Academic web projects' },
    { value: '4', label: 'Professional certifications' },
    { value: 'B.E.', label: 'CSE — R.M.K College of Engineering and Technology, Chennai' },
  ],
  social: {
    github: 'https://github.com/gajulavishnusai',
    linkedin: 'https://www.linkedin.com/in/gajula-vishnu-sai-909334370/',
  },
}

export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 75 },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 82 },
      { name: 'C++', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MySQL', level: 80 }],
  },
]

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description:
      'Academic e-commerce site with add-to-cart functionality and total price calculation using JavaScript. Cart data persists via localStorage, with a clean and user-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    liveUrl: '#',
    repoUrl: 'https://github.com/gajulavishnusai',
    accent: '#7dd3fc',
  },
  {
    id: 2,
    title: 'Quiz Web Application',
    description:
      'Interactive quiz app with a countdown timer and score tracking for evaluation. Includes replay functionality and responsive design for a smooth experience across devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    liveUrl: '#',
    repoUrl: 'https://github.com/gajulavishnusai',
    accent: '#c9f31d',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: 'R.M.K College of Engineering and Technology',
    location: 'Chennai',
    period: 'Present',
  },
  {
    degree: 'Board of Intermediate Education (MPC)',
    field: 'Mathematics, Physics, Chemistry',
    institution: 'Amaravathi JEE Academy',
    location: 'Tirupati',
    period: '2020 – 2023',
  },
  {
    degree: 'Board of Secondary Education',
    field: 'Secondary School',
    institution: 'Sri Chaitanya Techno School',
    location: '',
    period: '2020 – 2021',
  },
]

export const certifications = [
  {
    title: 'Frontend Development',
    issuer: 'Stax Tech',
    description: 'Web development fundamentals including HTML, CSS, and JavaScript.',
  },
  {
    title: 'HTML Language',
    issuer: 'Infosys Springboard',
    description: 'Core HTML skills for modern web development roles.',
  },
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
    description: 'Foundational Java programming concepts and problem-solving.',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle University',
    description: 'Cloud computing basics and Oracle Cloud Infrastructure concepts.',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]
