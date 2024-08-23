import React from "react";
import Social from "../../Social";
import styles from "./index.module.css";

const Stripes: React.FC = (): JSX.Element => {
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
