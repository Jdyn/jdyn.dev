import tech, { Technology } from './technologies';

export interface Project {
  css?: string;
  name: string;
  image: string;
  width: string;
  description: string;
  overview: string[];
  technologies: Technology[];
  links: ProjectLink[];
}

export interface Projects {
  [project: string]: Project;
}

export interface ProjectLink {
  name: string;
  href: string;
  description: string;
}

const link = (name: string, href: string, description: string): ProjectLink => ({
  name,
  href,
  description
});

const projects: Projects = {
  academus: {
    name: 'Academus',
    description: "A student's best friend",
    image: '/static/images/projects/academus.png',
    width: '605px',
    overview: [
      "Academus is an app for students who seek a real polished and tailored experience with features that give you an edge in school, allowing you to worry less. Since the inception of the idea in the latter half of 2018, Academus has grown beyond my expectations in part due to it's ability to integrate with many already existing solutions but also the small, yet versatile 6 person team we had, that was able to grow it into a reality.",
      'The backend of Academus is built with Rails and Node, distributed in docker containers, hosted on Microsoft Azure. Our mobile clients were built with modern languages, Swift and Kotin for iOS and Android respectively.',
      'With Academus, I constructed the iOS mobile application from scratch, collected user feedback, and iterated quickly. After releasing Academus on beta platforms such as Testflight, we began to grow exponentially in our early stages.'
    ],
    technologies: [
      tech.ios,
      tech.android,
      tech.rails,
      tech.azure,
      tech.node,
      tech.docker,
      tech.css
    ],
    links: [
      link('Website', 'https://academus.io/', 'academus-homepage'),
      link(
        'iOS',
        'https://itunes.apple.com/us/app/academus/id1366365507?mt=8',
        'academus-ios-homepage'
      ),
      link(
        'Android',
        'https://play.google.com/store/apps/details?id=io.academus.android',
        'academus-android-homepage'
      )
    ]
  },
  typer: {
    name: 'typer.io',
    description: '',
    image: '/static/images/projects/typer.png',
    overview: [
      'The ultimate goal of this project is to create a community for people who are genuinely interested in improving their typing abilities, but perhaps find conventional methods to be boring or unrewarding. I think because humans are inherently competitive by nature, incorporating a competitive aspect to typing can make learning and improving more interesting.',
      'The backend of typer.io is built with Phoenix and Node, distributed in AWS EC2 instances. Phoenix is connected to a Postgres DB supplied by Amazon RDS (currently). The web client is built entirely with React and utilizes Redux for state management.',
      "To dive a little deeper, Phoenix handles most of the sites general feature sets through a robust REST API, including the forum, leaderboards, accounts, etc. Node currently handles the realtime communication in the actual game. I don't know how good of an idea this was in retrospect due to scalability concerns, but there are options available. Namely clustering multiple Node instances in PM2 or docker, and creating a centralized storage between them with something like Redis. This will likely be all but neccessary if I were to continue using Node. Another option would be to ditch Node all together (atleast for gameplay) and use Phoenix's built in WebSocket support which has proven to be very scalable, having reached over 2 million concurrent web socket connections at once recently."
    ],
    technologies: [
      tech.react,
      tech.redux,
      tech.node,
      tech.phoenix,
      tech.css,
      tech.postgres,
      tech.ec2,
      tech.rds
    ],
    links: [
      link(
        'WIP demo',
        'http://typer-io-web.s3-website-us-west-1.amazonaws.com/',
        'typer.io-homepage'
      )
    ],
    width: '605px'
  },
  jdyn: {
    name: 'jdyn.dev',
    description: 'Portfolio',
    image: '/static/images/projects/jdyn.png',
    overview: [
      'Welcome to my portfolio. This space essentially allows me to give commentary about a project and perhaps some context. In addition, Links and technologies pertaining to the project are here for additional information and perhaps some insight into how the project was built.'
    ],
    technologies: [tech.typescript, tech.react, tech.next],
    links: [link('Source', 'https://github.com/Jdyn/jdyn.github.io', 'jdyn.dev-source-code')],
    width: '350px'
  },
  newProject: {
    name: 'Coming Soon',
    description: 'Upcoming Project',
    image: '/static/images/projects/new.png',
    overview: [],
    technologies: [
      tech.typescript,
      tech.next,
      tech.react,
      tech.redux,
      tech.phoenix,
      tech.nginx,
      tech.css,
      tech.postgres,
      tech.ec2,
      tech.rds
    ],
    links: [],
    width: '605px'
  },
  window: {
    name: 'Fog',
    image: '',
    overview: [],
    technologies: [],
    links: [],
    description: '#fdfbfb → #ebedee',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    width: '350px'
  }
};

export default projects;
