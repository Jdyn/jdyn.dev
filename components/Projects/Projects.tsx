import React, { useState, useRef, useEffect } from 'react';
import { useTransition, useSpring, useChain, animated } from 'react-spring';
import ReactGA from 'react-ga';
import ProjectModal from '../ProjectModal';
import { Project } from '../../lib/projects';
import styles from './styles.css';
import { containerConfig, projectConfig, labelConfig } from './springs';

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = (props: Props): JSX.Element => {
  const { projects } = props;

  const [isOpen, setOpen] = useState(false);
  const [didScroll, setScroll] = useState(false);
  const [modalIsOpen, setModal] = useState(false);
  const [currentProject, setProject] = useState(null);

  const containerRef: React.RefObject<HTMLDivElement> = useRef();

  useEffect((): React.EffectCallback => {
    const handleScrollEvent = (): void => setScroll(true);

    const isOutOfBounds = (target: EventTarget): boolean => {
      const html = document.getElementById('0729');
      const containsTarget = containerRef.current.contains(target as Node);

      if (!containsTarget && !modalIsOpen && target !== html) {
        return true;
      }

      return false;
    };

    const handleMouseEvent = (event: MouseEvent): void => {
      if (isOutOfBounds(event.target)) {
        setOpen(false);
      }
    };

    const handleTouchEvent = (event: TouchEvent): void => {
      if (isOutOfBounds(event.target) && !didScroll) {
        setOpen(false);
      }
    };

    document.addEventListener('mouseup', handleMouseEvent);
    document.addEventListener('touchend', handleTouchEvent);
    document.addEventListener('scroll', handleScrollEvent);
    return (): void => {
      document.removeEventListener('mouseup', handleMouseEvent);
      document.removeEventListener('touchend', handleTouchEvent);
      document.removeEventListener('scroll', handleScrollEvent);
    };
  }, [didScroll, setScroll, modalIsOpen]);

  const handleModal = (project: Project): void => {
    document.body.style.overflow = 'hidden';

    ReactGA.event({
      category: 'Projects',
      action: `open-project-card-${project.name}`
    });

    setProject(project);
    setModal(true);
  };

  const containerSpringRef = useRef();
  const containerSpring = useSpring({
    ref: containerSpringRef,
    from: containerConfig(isOpen).from,
    to: containerConfig(isOpen).to
  });

  const projectSpringRef = useRef();
  const projectSpring = useTransition(isOpen ? projects : [], (project): string => project.name, {
    ref: projectSpringRef,
    trail: 400 / projects.length,
    unique: true,
    from: projectConfig(isOpen).from,
    enter: projectConfig(isOpen).enter,
    leave: projectConfig(isOpen).leave,
  });

  const labelSpring = useSpring({
    from: labelConfig(isOpen).from,
    to: labelConfig(isOpen).to
  });

  useChain(
    isOpen ? [containerSpringRef, projectSpringRef] : [projectSpringRef, containerSpringRef],
    [0, isOpen ? 0.1 : 0.6]
  );

  return (
    <section className={styles.root}>
      <animated.div
        ref={containerRef}
        className={styles.container}
        style={{width: containerSpring.size, height: containerSpring.size}}
        onClick={(): void => setOpen(true)}
      >
        {projectSpring.map(
          (transition): JSX.Element => (
            <animated.div
              style={{
                ...transition.props,
                backgroundImage: `url(${transition.item.image})`,
                flexBasis: transition.item.width
              }}
              className={styles.card}
              key={transition.item.name}
              onClick={(): void => handleModal(transition.item)}
            />
          )
        )}
        {/* <animated.h3 className={styles.label} style={labelSpring}>
          my work
        </animated.h3> */}
      </animated.div>
      {modalIsOpen && <ProjectModal setModal={setModal} project={currentProject} />}
    </section>
  );
};

export default Projects;
