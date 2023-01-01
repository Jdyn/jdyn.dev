import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useSpring, animated, config } from 'react-spring';
import { Project } from '../../lib/projects';
import styles from './index.module.css';

interface Props {
  project: Project;
  setModal: (isOpen: boolean) => void;
}

const ProjectModal: React.FC<Props> = (props: Props): JSX.Element => {
  const { project, setModal } = props;

  const handleLinkClick = (description: string): void => {
    ReactGA.event({
      category: 'Projects',
      action: `project-link-click-${description}`
    });
  };

  const [{ opacity, transform }, set] = useSpring(() => ({
    config: config.default,
    to: {
      width: '100%',
      transform: 'scale(1)',
      opacity: 1
    },
    from: {
      width: '0%',
      opacity: 0,
      transform: 'scale(0)'
    },
    onRest: (changes): void => {
      if (!changes.value.opacity) {
        setModal(false);
      }
    }
  }));

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        document.body.style.overflow = 'visible';
        set({ width: '0%', opacity: 0, transform: 'scale(0)' });
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return (): void => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [set]);

  const closeModal = (event: React.SyntheticEvent): void => {
    if (event.target === event.currentTarget) {
      document.body.style.overflow = 'visible';

      const modal = document.getElementById('modal');
      if (modal) {
        modal.style.pointerEvents = 'none';
      }

      set({ width: '0%', opacity: 0, transform: 'scale(0)' });
    }
  };

  return (
    <animated.div id="modal" style={{ opacity }} className={styles.root} onClick={closeModal}>
      <animated.div className={styles.container} style={{ opacity, transform }}>
        <div
          className={styles.hero}
          style={{ backgroundImage: project.image ? `url(${project.image})` : project.css }}
        >
          <h1>{project.name}</h1>
          <span>{project.description}</span>
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
                  <a target="_blank" rel="noopener noreferrer" href={technology.href}>
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

export default ProjectModal;
