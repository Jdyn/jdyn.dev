import React from 'react';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Stripes from '../../components/Reusable/Stripes';
import Projects from '../../components/Projects';
// import TechStack from '../../components/TechStack';
import formatTime from '../../util/formatTime';
import project, { Project } from '../../lib/projects';
import tech, { Technology } from '../../lib/technologies';

const TechStack = dynamic(() => import('../../components/TechStack'), {
  ssr: false
});

const { phoenix, ios, node, react } = tech;
const { academus, typer, jdyn, window, newProject } = project;

const projects: Project[] = [academus, typer, jdyn, window, newProject];
const cards: Technology[] = [ios, node, react, phoenix];

const createdAt = formatTime(1582007359660);
const updatedAt = formatTime(1672550803179);

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Stripes />
      <header className={styles.header} />
      <section className={styles.hero}>
        <h3>My Stack</h3>
      </section>
      <TechStack cards={cards} />
      <Projects projects={projects} />
      <footer className={styles.footer}>
        <a href="https://github.com/Jdyn/jdyn.dev" target="_blank" rel="noopener noreferrer">
          source
        </a>
        <div>
          updated {updatedAt}, created {createdAt}
        </div>
      </footer>
    </div>
  );
};

export default Home;
