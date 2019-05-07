import tech from "./technologies";

const link = (name, ref) => ({
  name,
  ref
});

export default {
  academus: {
    name: "Academus",
    description: "A student's best friend",
    image: "images/projects/academus.png",
    overview: [
      "Academus is an app for students who seek a real polished and tailored experience with features that give you an edge in school, ultimately allowing you to worry less. Since the inception of the idea in the latter half of 2018, Academus has grown beyond my expectations in part due to it's ability to integrate with many already existing solutions but also the small, yet versatile 6 person team we had, that was able to grow it into a reality.",
      "The backend of Academus is built with Rails and Node, distributed in docker containers, hosted on Microsoft Azure. Our mobile clients were built with modern languages, Swift and Kotin for iOS and Android respectively.",
      "With Academus, I constructed the iOS mobile application and performed the due dilligence Associated with it such as collecting user feedback and iterating on it quickly which made working on Academus very exciting. After releasing Academus on beta platforms such as Testflight, we began to grow exponentially, reaching over 30% of our school population and then onto other schools in the US. Plans for new features every year are in place with constant student feedback in mind."
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
      link("Website", "https://academus.io/"),
      link("iOS", "https://itunes.apple.com/us/app/academus/id1366365507?mt=8"),
      link("Android", "https://play.google.com/store/apps/details?id=io.academus.android")
    ],
    width: "605px"
  },
  typer: {
    name: "typer.io",
    description: "",
    image: "images/projects/typer.png",
    overview: [
      "The ultimate goal of this project is to create a community for people who are genuinely interested in improving their typing abilities, but perhaps find conventional methods to be boring or unrewarding. I think because humans are inherently competitive by nature, incorporating a competitive aspect to typing can make learning and improving more interesting.",
      "The backend of typer.io is built with Phoenix and Node, distributed in AWS EC2 instances. Phoenix is connected to a Postgres DB supplied by Amazon RDS (currently). The web client is built entirely with React and utilizes Redux for state management.",
      "To dive a little deeper, Phoenix handles most of the sites general feature sets through a robust REST API, including the forum, leaderboards, accounts, etc. Node, currently handles the realtime communication in the actual game. I don't know how good of an idea this was in retrospect due to scalability concerns, but there are options available. Namely clustering multiple Node instances in PM2 or docker, and creating a centralized storage between them with Redis. This will likely be all but neccessary if I were to continue using Node. Another option would be to ditch Node all together (atleast for the game portion) and use Phoenix's built in WebSocket support which has proven to be very scalable, having reached over 2 million concurrent web socket connections at once recently.",
      "This is a personal project but would love if anyone wanted to help out, there is a lot to do. you can message me on LinkedIn or email me."
    ],
    technologies: [
      tech.react,
      tech.redux,
      tech.node,
      tech.phoenix,
      tech.css,
      tech.ec2,
      tech.rds
    ],
    links: [link("WIP demo", "http://typer-io-web.s3-website-us-west-1.amazonaws.com/")],
    width: "605px"
  },
  jdyn: {
    name: "jdyn.dev",
    description: "Portfolio",
    image: "images/projects/jdyn.png",
    overview: [
      "The goal of the site is to hopefully be a testament to my design philosphies over time. Similar to how architecture changes drastically through periods of time, I think the internet as a whole follows a similar trend. I intend to update and evolve the site as the Internet and I do.",
      "Aside from design, the site is of course mainly a portfolio + random stuff and I will try to update it with recent work as often as possible."
    ],
    technologies: [tech.react],
    links: [link("Source", "https://github.com/Jdyn/jdyn.github.io")],
    width: "350px"
  },
  lemonade: {
    name: "Pink Lemonade",
    overview: [],
    technologies: [],
    links: [],
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    width: "350px"
  },
  window: {
    name: "Fog",
    overview: [],
    technologies: [],
    links: [],
    description: "#fdfbfb → #ebedee",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    width: "350px"
  }
};
