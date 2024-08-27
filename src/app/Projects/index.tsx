import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";
import ProjectDialog from "../../components/ProjectModal";
import { containerConfig, labelConfig } from "./springs";
import project from "@/lib/projects";

import styles from "./index.module.css";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";

const projects = Object.values(project);

const Projects = (): JSX.Element => {
  const isOpen = useMatch("/projects/:projectName?");
  const { projectName } = useParams();

  const navigate = useNavigate();
  const [didScroll, setScroll] = useState(false);

  const currentProject = useMemo(() => {
    if (!projectName) return null;
    return projects.find((project) => project.id === projectName);
  }, [projectName]);

  const rootRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleScrollEvent = (): void => setScroll(true);

    const isOutOfBounds = (target: EventTarget): boolean => {
      const html = document.getElementById("0729");
      const containsTarget = rootRef.current?.contains(target as Node);

      if (!containsTarget && !currentProject && target !== html) {
        return true;
      }

      return false;
    };

    const handleMouseEvent = (event: MouseEvent): void => {
      if (event.target && isOutOfBounds(event.target)) {
        navigate("..");
      }
    };

    const handleTouchEvent = (event: TouchEvent): void => {
      if (event.target && isOutOfBounds(event.target) && !didScroll) {
        navigate("..");
      }
    };

    document.addEventListener("mouseup", handleMouseEvent);
    document.addEventListener("touchend", handleTouchEvent);
    document.addEventListener("scroll", handleScrollEvent);

    return (): void => {
      document.removeEventListener("mouseup", handleMouseEvent);
      document.removeEventListener("touchend", handleTouchEvent);
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, [currentProject, didScroll, navigate, setScroll]);

  const containerRef = useSpringRef();
  const containerSpring = useSpring(
    containerConfig(isOpen !== null, containerRef)
  );

  const projectRef = useSpringRef();
  const projectSpring = useTransition(projects, {
    ref: projectRef,
    trail: 400 / projects.length,
    from: {
      height: "0px",
      transform: "scale(0)",
      margin: "0px",
      opacity: 0,
    },
    update: {
      height: isOpen ? "350px" : "0px",
      margin: isOpen ? "10px" : "0px",
      transform: isOpen ? "scale(1)" : "scale(0)",
      opacity: isOpen ? 1 : 0,
    },
  });

  const labelStyles = useSpring(labelConfig(isOpen !== null));

  useChain(
    isOpen ? [containerRef, projectRef] : [projectRef, containerRef],
    [0, 0.1]
  );

  return (
    <section className={styles.root}>
      <animated.div
        ref={rootRef}
        className={styles.container}
        data-open={isOpen}
        style={containerSpring}
        onClick={(): void => {
          if (!isOpen) {
            navigate("/projects");
          }
        }}
      >
        {projectSpring((style, item): JSX.Element => {
          return (
            <animated.div
              style={{
                ...style,
                backgroundImage: item.image ? `url(${item.image})` : item.css,
                flexBasis: item.width,
              }}
              className={styles.card}
              key={item.name}
            >
              <Link
                style={{ width: "100%", height: "100%" }}
                to={`/projects/${item.id}`}
              />
            </animated.div>
          );
        })}
        <animated.h3 className={styles.label} style={labelStyles}>
          my work
        </animated.h3>
      </animated.div>
      {currentProject && <ProjectDialog project={currentProject} />}
    </section>
  );
};

export default Projects;
