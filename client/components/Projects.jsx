import React, { useState, useRef, useEffect } from 'react';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import ProjectCard from './ProjectCard';
import Modal from './ProjectModal';
import ReactGA from 'react-ga';

const propTypes = {
  classes: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

const Projects = props => {
  const { classes, projects, theme } = props;
  const [open, set] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentProject, setProject] = useState({});
  const [scrolled, setScroll] = useState(false);

  const myRef = useRef();

  const handleModal = project => {
    document.body.style.overflow = 'hidden';
    ReactGA.event({
      category: 'Projects',
      action: `open-project-card-${project.name}`
    });
    setProject(project);
    setModal(true);
  };

  const handleScroll = e => {
    setScroll(true);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        !myRef.current.contains(e.target) &&
        !modal &&
        e.target !== document.getElementById('0729') &&
        e.target !== document.getElementById('themeSwitch')
      ) {
        set(false);
      }
    };

    const handleTouchOutside = e => {
      if (
        !myRef.current.contains(e.target) &&
        !modal &&
        e.target !== document.getElementById('0729') &&
        e.target !== document.getElementById('themeSwitch') &&
        !scrolled
      ) {
        set(false);
      }

      setScroll(false);
    };

    document.addEventListener('mouseup', handleClickOutside);
    document.addEventListener('touchend', handleTouchOutside);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
      document.removeEventListener('touchend', handleTouchOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [modal, scrolled]);

  const titleSpring = useSpring({
    from: { opacity: 0, height: '0px' },
    to: {
      opacity: open ? 0 : 1,
      height: open ? '0' : '60px'
    }
  });

  const containerRef = useRef();
  const { width, opacity, ...rest } = useSpring({
    ref: containerRef,
    config: config.stiff,
    from: {
      width: '0%',
      background: theme.accent,
      boxShadow: '0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)'
    },
    to: {
      width: open ? '100%' : '15%',
      background: open ? theme.primary : theme.accent,
      cursor: open ? 'default' : 'pointer',
      boxShadow: open
        ? `0 0px 200px -20px ${theme.shadow}, 0 30px 120px -30px ${theme.shadow}`
        : `0 0px 35px 0px ${theme.shadow}, 0 30px 0px -30px rgba(0,0,0,.3)`
    }
  });

  const itemsRef = useRef();
  const transitions = useTransition(projects, item => item.name, {
    ref: itemsRef,
    unique: true,
    config: config.default,
    trail: 400 / projects.length,
    from: {
      height: '0px',
      transform: 'scale(0)',
      margin: '0px',
      opacity: 0
    },
    update: {
      height: open ? '350px' : '0px',
      margin: open ? '10px' : '0px',
      transform: open ? 'scale(1)' : 'scale(0)',
      opacity: open ? 1 : 0
    }
  });

  useChain(open ? [containerRef, itemsRef] : [itemsRef, containerRef], [0, 0.1]);

  return (
    <section className={classes.container}>
      {modal && <Modal setModal={setModal} project={currentProject} />}
      <animated.div
        id="projectsDisplay"
        ref={myRef}
        className={classes.display}
        style={{ ...rest, width }}
        tabIndex="0"
        onClick={() => {
          ReactGA.event({
            category: 'Projects',
            action: 'open-container'
          });
          set(true);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            if (
              document.activeElement.tabIndex ===
              document.getElementById('projectsDisplay').tabIndex
            ) {
              set(!open);
            }
          }
        }}
      >
        {transitions.map(({ item, key, props }, index) => (
          <ProjectCard
            key={key}
            project={item}
            tabIndex={modal ? -1 : open ? `${3 + index}` : -1}
            style={{
              ...props,
              background: item.css
            }}
            handleModal={handleModal}
          />
        ))}
        <animated.div className={classes.buttonTitle} style={titleSpring}>
          my work
        </animated.div>
      </animated.div>
    </section>
  );
};

const styles = theme => ({
  container: {
    gridArea: 'projects',
    display: 'flex',
    transitionDuration: '0.2s',
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    minHeight: '250px',
    pointerEvents: 'none'
  },
  display: {
    position: 'relative',
    display: 'flex',
    pointerEvents: 'auto',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    outline: 'none',
    borderRadius: 10,
    minWidth: '250px',
    maxWidth: '1195px',
    cursor: 'pointer',
    willChange: 'width, height'
  },
  buttonTitle: {
    display: 'flex',
    color: 'white',
    position: 'relative',
    fontWeight: 700,
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    textTransform: 'uppercase',
    letterSpacing: '0.125em',
    alignItems: 'center'
  }
});

Projects.propTypes = propTypes;

export default withStyles(styles, { injectTheme: true })(Projects);