export interface Technology {
  name: string;
  href: string;
  icon: string;
  overview: string;
}

export interface Technologies {
  [technology: string]: Technology;
}

const technologies: Technologies = {
  docker: {
    name: 'Docker',
    href: 'https://www.docker.com/',
    overview:
      "Docker is a tool I would like to use more - and certainly plan on using more in the near future. I've deployed a relatively simple setup using docker (reverse proxy django / node setup with nginx) and was quite fond. I certainly have a lot more to learn about this tool but look forward to it.",
    icon: '/src/images/technologies/docker.svg'
  },
  django: {
    name: 'Django',
    href: '',
    icon: '/src/images/technologies/django.svg',
    overview:
      "Django is a tool that has undoubtedly withstood the test of time. It has a very strong community and ecosystem. But Django is not without it's flaws. Similar to Node, recent technologies like Go and Elixir appear to be more well rounded. While it would not be my first choice, I enjoy working with Python and the ecosystem at large."
  },
  ios: {
    name: 'iOS',
    href: 'https://developer.apple.com/documentation/',
    overview:
      "The type-safety and structure given while working with Swift and Apple's platform is welcomed. Building up Academus iOS from scratch really solitified my knowledge and allowed me to grow exponentially in my early years.",
    icon: '/src/images/technologies/ios.svg'
  },
  css: {
    name: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    overview:
      'Serious advancements have been made with CSS in recent years. Namely CSS Grid and Flexbox. With the combination of these tools, executing more modern design patterns is trivial in comparison to earlier methods. Flexbox and Grid have allowed me to take a level-headed approach to working with CSS.',
    icon: '/src/images/technologies/css.svg'
  },
  phoenix: {
    name: 'Phoenix',
    href: 'https://phoenixframework.org/',
    overview:
      "Elixir's high concurrency and fault tolerant design puts Phoenix among the greatest for large-scale web applications. I think Phoenix (and Elixir) has a lot more potential than it bargains for.",
    icon: '/src/images/technologies/phoenix.svg'
  },
  react: {
    name: 'React.js',
    href: 'https://reactjs.org/',
    overview:
      'Almost everything I make these days involves React in some way. The most fundamental purpose of a front-end framework is to enable the developer to iterate fast and React actualizes this idea very well.',
    icon: '/src/images/technologies/react.svg'
  },
  redux: {
    name: 'Redux.js',
    href: 'https://redux.js.org/',
    overview: '',
    icon: '/src/images/technologies/redux.svg'
  },
  next: {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    overview: '',
    icon: '/src/images/technologies/next.svg'
  },
  node: {
    name: 'Node.js',
    href: 'https://nodejs.org/en/',
    overview:
      "Due to the inherent speed of Node's event system and async I/O model, It is among my first considerations when implementing real time features. I find myself using it often and consider it to be quite an exceptional tool.",
    icon: '/src/images/technologies/nodejs.svg'
  },
  postgres: {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    overview: '',
    icon: '/src/images/technologies/postgresql.svg'
  },
  ec2: {
    name: 'Amazon EC2',
    href: 'https://aws.amazon.com/ec2/',
    overview: '',
    icon: '/src/images/technologies/ec2.svg'
  },
  rds: {
    name: 'Amazon RDS',
    href: 'https://aws.amazon.com/rds/',
    overview: '',
    icon: '/src/images/technologies/rds.svg'
  },
  rails: {
    name: 'Ruby on Rails',
    href: 'https://rubyonrails.org/',
    overview: '',
    icon: '/src/images/technologies/rails.svg'
  },
  nginx: {
    name: 'nginx',
    href: 'https://www.nginx.com/',
    overview: '',
    icon: '/src/images/technologies/nginx.svg'
  },
  azure: {
    name: 'Azure',
    href: 'https://azure.microsoft.com/en-us/overview/what-is-azure/',
    overview: '',
    icon: '/src/images/technologies/azure.svg'
  },
  android: {
    name: 'Android',
    href: 'https://developer.android.com/guide/platform',
    overview: '',
    icon: '/src/images/technologies/android.svg'
  },
  typescript: {
    name: 'TypeScript',
    href: 'https://developer.android.com/guide/platform',
    overview: '',
    icon: '/src/images/technologies/typescript.svg'
  }
};

export default technologies;
