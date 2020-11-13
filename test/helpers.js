const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Sagar G. Khengat',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Sagar G. Khengat',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Sagar G. Khengat',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Sagar G. Khengat',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Sagar G. Khengat',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
