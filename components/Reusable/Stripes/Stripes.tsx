import React from 'react';
import Social from '../../Social/Social';
import styles from './styles.css';

interface Props {
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stripes: React.FC = (props: Props): JSX.Element => {
  return (
    <div className={styles.stripes}>
      <span />
      <span />
      <span />
      <span />
      <span>
        <Social />
      </span>
    </div>
  );
};

export default Stripes;
