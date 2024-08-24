import React from 'react';
import styles from './index.module.css';
import Stripes from '@/components/Reusable/Stripes';
import Projects from '@/app/Projects';
import formatTime from '../../util/formatTime';
// import TechStack from '@/components/TechStack';

const createdAt = formatTime(1582007359660);
const updatedAt = formatTime(1672550803179);

const Index: React.FC = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Stripes />
      {/* <header className={styles.header} />
      <section className={styles.hero}>
      </section> */}

      {/* <TechStack /> */}
      <Projects />
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

export default Index;
