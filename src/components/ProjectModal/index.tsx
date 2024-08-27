import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useSpring, animated, config } from "@react-spring/web";
import { Project } from "../../lib/projects";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  project: Project;
}

const ProjectDialog: React.FC<Props> = (props: Props): JSX.Element => {
  const { project } = props;
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleLinkClick = (description: string): void => {
    ReactGA.event({
      category: "Projects",
      action: `project-link-click-${description}`,
    });
  };

  const [{ opacity, transform }, set] = useSpring(() => ({
    config: config.default,
    to: {
      width: "100%",
      transform: "scale(1)",
      opacity: 1,
    },
    from: {
      width: "0%",
      opacity: 0,
      transform: "scale(0)",
    },
    onRest: (changes): void => {
      if (!changes.value.opacity) {
        navigate("/projects");
      }
    },
  }));

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        document.body.style.overflow = "visible";
        set({ width: "0%", opacity: 0, transform: "scale(0)" });
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return (): void => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [set]);

  const closeModal = (event: React.SyntheticEvent): void => {
    if (event.target === event.currentTarget) {
      document.body.style.overflow = "visible";

      const modal = document.getElementById("modal");
      if (modal) {
        modal.style.pointerEvents = "none";
      }

      set({ width: "0%", opacity: 0, transform: "scale(0)" });
    }
  };

  return (
    <animated.div
      id="modal"
      style={{ opacity }}
      className={styles.root}
      onClick={closeModal}
    >
      <animated.div className={styles.container} style={{ opacity, transform }}>
        <div
          className={styles.hero}
          style={{
            backgroundImage: project.image
              ? `url(${project.image})`
              : project.css,
          }}
        >
          <div className={styles.close}>
            <button type="button" onClick={closeModal}>
              <svg
                onClick={closeModal}
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className={styles.content}>
            <h1>{project.name}</h1>
            <span>{project.description}</span>
          </div>
        </div>
        <div className={styles.overview}>
          <div className={styles.overviewLeft}>
            <h3>Overview</h3>
            {project.overview.map(
              (paragraph): JSX.Element => (
                <p key={paragraph}>{paragraph}</p>
              )
            )}
          </div>
          <div className={styles.overviewRight}>
            <h3>Links</h3>
            {project.links.map(
              (link): JSX.Element => (
                <a
                  key={link.name}
                  onClick={(): void => handleLinkClick(link.description)}
                  href={`${link.href}`}
                  className={styles.linkItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </div>
                </a>
              )
            )}
            <h3>Technologies</h3>
            {project.technologies.map(
              (technology): JSX.Element => (
                <div className={styles.techItem} key={technology.name}>
                  <img alt="technology icon" src={technology.icon} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={technology.href}
                  >
                    {technology.name}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default ProjectDialog;
