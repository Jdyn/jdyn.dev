import React, { useMemo } from 'react';
import styles from './index.module.css';
import Stripes from '../Reusable/Stripes';
import Projects from '../Projects';
import TechStack from '../TechStack';
import formatTime from '../../util/formatTime';
import { Project } from '../../lib/projects';
import { Technology } from '../../lib/technologies';

export interface Props {
  cards: Technology[];
  projects: Project[];
}

const Home: React.FC<Props> = (props: Props): JSX.Element => {
  const { cards, projects } = props;

  const createdAt = useMemo((): string => formatTime(1582007359660), []);
  const updatedAt = useMemo((): string => formatTime(1672550803179), []);

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
