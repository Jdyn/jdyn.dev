import React, { useState, useRef, useEffect } from 'react';
import { useTransition, useSpring, useChain, animated, useSpringRef } from '@react-spring/web';
import ProjectDialog from '../../components/ProjectModal';
import { containerConfig, labelConfig } from './springs';
import project, { Project } from "@/lib/projects";

import styles from './index.module.css';

const projects = Object.values(project);

const Projects = (): JSX.Element => {

  const [isOpen, setOpen] = useState(false);
  const [didScroll, setScroll] = useState(false);
  const [modalIsOpen, setModal] = useState(false);
  const [currentProject, setProject] = useState<Project | null>(null);

  const rootRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleScrollEvent = (): void => setScroll(true);

    const isOutOfBounds = (target: EventTarget): boolean => {
      const html = document.getElementById('0729');
      const containsTarget = rootRef.current?.contains(target as Node);

      if (!containsTarget && !modalIsOpen && target !== html) {
        return true;
      }

      return false;
    };

    const handleMouseEvent = (event: MouseEvent): void => {
      if (event.target && isOutOfBounds(event.target)) {
        setOpen(false);
      }
    };

    const handleTouchEvent = (event: TouchEvent): void => {
      if (event.target && isOutOfBounds(event.target) && !didScroll) {
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

    setProject(project);
    setModal(true);
  };

  const containerRef = useSpringRef();
  const containerSpring = useSpring(containerConfig(isOpen, containerRef));

  const projectRef = useSpringRef();
  const projectSpring = useTransition(projects, {
    ref: projectRef,
    trail: 400 / projects.length,
    from: {
      height: '0px',
      transform: 'scale(0)',
      margin: '0px',
      opacity: 0
    },
    update: {
      height: isOpen ? '350px' : '0px',
      margin: isOpen ? '10px' : '0px',
      transform: isOpen ? 'scale(1)' : 'scale(0)',
      opacity: isOpen ? 1 : 0
    }
  });

  const labelStyles = useSpring(labelConfig(isOpen));

  useChain(isOpen ? [containerRef, projectRef] : [projectRef, containerRef], [0, 0.1]);

  return (
    <section className={styles.root}>
      <animated.div
        ref={rootRef}
        className={styles.container}
        data-open={isOpen}
        style={containerSpring}
        onClick={(): void => setOpen(true)}
      >
        {projectSpring(
          (style, item): JSX.Element => {

            return (
              <animated.div
                style={{
                  ...style,
                  backgroundImage: item.image ? `url(${item.image})` : item.css,
                  flexBasis: item.width
                }}
                className={styles.card}
                key={item.name}
                onClick={(): void => handleModal(item)}
              />
            )
          }
        )}
        <animated.h3 className={styles.label} style={labelStyles}>
          work
        </animated.h3>
      </animated.div>
      {modalIsOpen && currentProject && <ProjectDialog setModal={setModal} project={currentProject} />}
    </section>
  );
};

export default Projects;
