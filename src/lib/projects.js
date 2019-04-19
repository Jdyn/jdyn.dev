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
      "The backend of Academus is built with Rails and Node, distributed in docker containers, hosted on Microsoft Azure. Our mobile clients were built with Both modern languages, Swift and Kotin for iOS and Android respectively.",
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
      link("iOS store", "https://itunes.apple.com/us/app/academus/id1366365507?mt=8"),
      link("Android store", "https://play.google.com/store/apps/details?id=io.academus.android")
    ],
    width: "605px"
  },
  typer: {
    name: "typer.io",
    description: "",
    image: "images/projects/typer.png",
    overview: ["Details soon"],
    technologies: [tech.react, tech.phoenix, tech.node, tech.css, tech.ec2, tech.rds],
    links: [link("WIP demo", "http://typer-io-web.s3-website-us-west-1.amazonaws.com/")],
    width: "605px"
  },
  jdyn: {
    name: "jdyn.dev",
    description: "Portfolio",
    image: "images/projects/jdyn.png",
    overview: [
      "The goal of the site is to hopefully be a testament to my design philosphies over time. Similar to how architecture changes drastically through periods of time, we have and will see the internet as a whole follow this trend. I intend to update and evolve the site as the Internet and I do.",
      "The site will of course act as a portfolio of sorts and I will try to update it with recent work as often as possible.",
      "I might build a blog if there is something I want to say."
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
