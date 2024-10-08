import tech, { Technology } from "./technologies";

export interface Project {
  css?: string;
  name: string;
  id: string;
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

const link = (
  name: string,
  href: string,
  description: string
): ProjectLink => ({
  name,
  href,
  description,
});

const projects: Projects = {
  academus: {
    name: "Academus",
    id: "academus",
    description: "A student's best friend",
    image: "/assets/images/projects/academus.png",
    width: "605px",
    overview: [
      "Academus is an app for students who seek a real polished and tailored experience with features that give you an edge in school, allowing you to worry less. Since the inception of the idea in the latter half of 2018, Academus has grown beyond my expectations in part due to it's ability to integrate with many already existing solutions but also the small, yet versatile 6 person team we had, that was able to grow it into a reality.",
      "The backend of Academus is built with Rails and Node, distributed in docker containers, hosted on Microsoft Azure. Our mobile clients were built with modern languages, Swift and Kotin for iOS and Android respectively.",
      "With Academus, I constructed the iOS mobile application from scratch, collected user feedback, and iterated quickly. After releasing Academus on beta platforms such as Testflight, we began to grow exponentially in our early stages.",
    ],
    technologies: [
      tech.ios,
      tech.android,
      tech.rails,
      tech.azure,
      tech.node,
      tech.docker,
      tech.css,
    ],
    links: [
      link(
        "iOS Source",
        "https://github.com/Jdyn/academus-ios",
        "academus-ios-source"
      ),
    ],
  },
  typer: {
    name: "typer.io",
    id: "typer",
    description: "",
    image: "/assets/images/projects/typer.png",
    overview: [
      "The ultimate goal of this project is to create a community for people who are genuinely interested in improving their typing abilities, but perhaps find conventional methods to be boring or unrewarding. I think because humans are inherently competitive by nature, incorporating a competitive aspect to typing can make learning and improving more interesting.",
      "The backend of typer.io is built with Phoenix and Node, distributed in AWS EC2 instances. Phoenix is connected to a Postgres DB supplied by Amazon RDS (currently). The web client is built entirely with React and utilizes Redux for state management.",
      "To dive a little deeper, Phoenix handles most of the sites general feature sets through a robust REST API, including the forum, leaderboards, accounts, etc. Node currently handles the realtime communication in the actual game. I don't know how good of an idea this was in retrospect due to scalability concerns, but there are options available. Namely clustering multiple Node instances in PM2 or docker, and creating a centralized storage between them with something like Redis. This will likely be all but neccessary if I were to continue using Node. Another option would be to ditch Node all together (atleast for gameplay) and use Phoenix's built in WebSocket support which has proven to be very scalable, having reached over 2 million concurrent web socket connections at once recently.",
    ],
    technologies: [
      tech.react,
      tech.redux,
      tech.next,
      tech.node,
      tech.phoenix,
      tech.css,
      tech.postgres,
      tech.ec2,
      tech.rds,
    ],
    links: [
      link("Website", "https://typer.io", "typer.io-homepage"),
      link(
        "Frontend Source",
        "https://github.com/Jdyn/typer-io-web",
        "typer.io-homepage"
      ),
    ],
    width: "605px",
  },
  jdyn: {
    name: "jdyn.dev",
    id: "jdyn",
    description: "Portfolio",
    image: "/assets/images/projects/jdyn.png",
    overview: [
      "This space essentially allows for me to give some form of commentary, context, and perhaps some insight into how the project was built. In addition, Links and technologies pertaining to the project are there for additional information.",
    ],
    technologies: [tech.typescript, tech.react, tech.next],
    links: [
      link("Recursion", "https://jdyn.dev", "jdyn.dev"),
      link(
        "Source",
        "https://github.com/Jdyn/jdyn.dev",
        "jdyn.dev-source-code"
      ),
    ],
    width: "350px",
  },
  groop: {
    name: "Groop",
    id: "groop",
    image: "/assets/images/projects/groop.png",
    overview: [],
    technologies: [
      tech.react,
      tech.redux,
      tech.phoenix,
      tech.css,
      tech.postgres,
      tech.typescript,
      tech.elixir
    ],
    links: [],
    description: "Unannounced Project",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    width: "605px",
  },
  lolHero: {
    name: "LoLHero",
    id: "lolhero",
    description: "Video Game Account Boosting Service",
    image: "/assets/images/projects/lolhero.png",
    overview: ["WIP"],
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
      tech.rds,
    ],
    links: [
      link(
        "Frontend Source",
        "https://github.com/Jdyn/lolhero-web",
        "lolhero-front-source"
      ),
      link(
        "Backend Source",
        "https://github.com/Jdyn/lolhero-server",
        "lolhero-front-source"
      ),
      link("Live Website", "https://hero-dev.vercel.app/", "lolhero-website"),
    ],
    width: "605px",
  },
  next: {
    name: "Coming Soon",
    id: "next",
    image: "",
    overview: [],
    technologies: [],
    links: [],
    description: "Unannounced Project",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    width: "350px",
  },
};

export default projects;
