import React, { useMemo } from 'react';
import styles from './styles.css';
import Stripes from '../Reusable/Stripes';
import Projects from '../Projects';
import TechStack from '../TechStack';
import formatTime from '../../util/formatTime';
import { Project } from '../../lib/projects';
import { Technology } from '../../lib/technologies';

export interface Props {
  cards: Technology[];
  projects: Project[];
  children?: React.ReactNode;
}

const Home: React.FC<Props> = (props: Props): JSX.Element => {
  const { cards, projects } = props;

  const lastUpdate = useMemo((): string => formatTime(new Date(1582007359660)), [formatTime]);

  return (
    <div className={styles.root}>
      <Stripes />
      <header className={styles.header} />
      <section className={styles.hero}>
        <h3>My Stack.</h3>
      </section>
      <TechStack cards={cards} />
      <Projects projects={projects} />
      <footer className={styles.footer}>updated {lastUpdate}</footer>
    </div>
  );
};

export default Home;
