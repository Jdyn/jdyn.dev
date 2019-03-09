import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { useSpring, config, animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const Modal = props => {
  const { classes, setModal, item } = props;

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      document.body.style.overflow = "visible";
      set({ width: "0%", opacity: 0, transform: "scale(0)" });
    }
  };

  const [{ opacity, ...rest }, set] = useSpring(() => ({
    config: config.default,
    to: {
      width: "100%",
      transform: "scale(1)",
      opacity: 1
    },
    from: {
      width: "0%",
      opacity: 0,
      transform: "scale(0)"
    },
    onRest: changes => {
      if (!changes.opacity) {
        setModal(false); // A proper hack...
      }
    }
  }));

  return (
    <animated.div style={{ opacity }} className={classes.root} onClick={e => handleClick(e)}>
      <animated.div className={classes.container} style={{ opacity, ...rest }}>
        <div className={classes.hero}>
          <h1>{item.name}</h1>
          <span>{item.description}</span>
        </div>
        <div className={classes.overview}>
          <div className={classes.overviewLeft}>
            {item.overview.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className={classes.overviewRight}>
            <h3>Links</h3>
            {item.links.map((item, index) => (
              <div key={index} className={classes.link}>
                <a href={`${item.ref}`} target="_blank" rel="noopener noreferrer">
                  {item.name}
                  <div className={classes.linkImage}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
            <h3>Technologies</h3>
            {item.technologies.map((item, index) => (
              <div className={classes.techItem} key={index}>
                <img alt="technology icon" src={item.icon} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};
// alt="link icon" src={"img/link.svg"}
const styles = theme => ({
  root: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    overflowY: "auto",
    padding: "80px 0",
    "&::-webkit-scrollbar": {
      width: "11px",
      height: "16px",
      backgroundColor: "lightgrey"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0.2)"
    },
    "&::-webkit-scrollbar-button": {
      width: "0",
      height: "0",
      display: "none"
    }
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "1000px",
    borderRadius: 10,
    margin: "auto",
    backgroundColor: theme.primary,
    zIndex: 150,
    boxShadow: `0 50px 200px -20px ${theme.shadow}, 0 30px 120px -30px ${theme.shadow}`
  },
  hero: props => ({
    display: "flex",
    position: "relative",
    flexDirection: "column",
    textAlign: "center",
    padding: "150px 0px",
    width: "100%",
    color: theme.color,
    "& h1, span": {
      marginTop: 0,
      zIndex: 160
    },
    boxShadow: "0 5px 12px 0 rgba(0,0,0,.15)",
    backgroundImage: `url(${props.item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px 8px 0 0",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 155,
      background: "rgba(0, 0, 0, 0.6)",
      borderRadius: "8px 8px 0 0"
    }
  }),
  overview: {
    display: "flex",
    position: "relative",
    width: "100%",
    padding: "15px",
    flexDirection: "column-reverse",
    "@media (min-width: 750px)": {
      flexDirection: "row",
      padding: "30px"
    }
  },
  overviewLeft: {
    zIndex: 165,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    flexBasis: "70%",
    flexGrow: 1,
    backgroundColor: theme.modal,
    color: theme.color,
    borderRadius: 5,
    padding: "20px",
    boxShadow: "0 5px 12px 0 rgba(0,0,0,.15)",
    marginTop: "10%",
    "& p": {
      margin: 0,
      marginBottom: "15px"
    },
    "@media (min-width: 750px)": {
      marginRight: "30px",
      marginTop: "-10%"
    }
  },
  overviewRight: {
    zIndex: 165,
    display: "flex",
    flexDirection: "column",
    flexBasis: "30%",
    position: "relative",
    padding: "20px",
    borderRadius: 5,
    boxShadow: "0 5px 12px 0 rgba(0,0,0,.15)",
    backgroundColor: theme.modal,
    color: theme.color,
    marginTop: "-10%"
  },
  techItem: {
    marginBottom: "5px",
    "& img": {
      width: "15%",
      marginRight: "14px",
      verticalAlign: "middle",
      minWidth: "32px",
      minHeight: "32px"
    }
  },
  link: {
    marginBottom: "10px",
    color: theme.color,
    fill: theme.color,
    "& a": {
      textDecoration: "none",
      color: theme.color,
      display: "flex",
      flexDirection: "row"
    }
  },
  linkImage: {
    marginLeft: "20px",
    fill: theme.color
  }
});

Modal.propTypes = propTypes;

export default withStyles(styles)(Modal);
