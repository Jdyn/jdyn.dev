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
    event.preventDefault();
    if (event.target === event.currentTarget) {
      set({ width: "0%", opacity: 0, transform: "scale(0)" });
      document.body.style.overflow = "visible";
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
        {/* <div className={classes.actions} /> */}
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
            <h3>Technologies</h3>
            {item.technologies.map((item, index) => (
              <div className={classes.techItem} key={index}>
                <img alt="technology icon" src={item.icon} className={classes.techLogo} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

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
    padding: "50px 0"
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "950px",
    borderRadius: 10,
    // padding: "15px",
    margin: "auto",
    zIndex: 150,
    boxShadow: "0 50px 200px -20px rgba(50,50,93,.25), 0 30px 120px -30px rgba(0,0,0,.3)",
    backgroundColor: "white"
  },
  hero: props => ({
    display: "flex",
    position: "relative",
    flexDirection: "column",
    textAlign: "center",
    padding: "125px 0px",
    width: "100%",
    color: "white",
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
    flexDirection: "column",
    width: "100%",
    padding: "15px",

    "@media (min-width: 750px)": {
      flexDirection: "row",
      padding: "30px"
    }
  },
  overviewLeft: {
    marginTop: "-10%",
    zIndex: 165,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    flexBasis: "65%",
    flexGrow: 1,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.05)",
    padding: "15px",
    boxShadow: "0 5px 12px 0 rgba(0,0,0,.15)",
    "& p": {
      margin: 0,
      marginBottom: "15px"
    },
    "@media (min-width: 750px)": {
      marginRight: "30px"
    }
  },
  overviewRight: {
    zIndex: 165,
    display: "flex",
    flexDirection: "column",
    flexBasis: "35%",
    position: "relative",
    padding: "15px",
    marginTop: "10%",
    boxShadow: "0 5px 12px 0 rgba(0,0,0,.15)",
    backgroundColor: "#fff",
    "@media (min-width: 750px)": {
      marginTop: "-10%"
    }
  },
  actions: {
    width: "100%",
    height: "30px",
    backgroundColor: "white",
    borderRadius: "8px 8px 0px 0px"
  },
  techLogo: {
    width: "15%",
    marginRight: "14px",
    verticalAlign: "middle",
    minWidth: "32px",
    minHeight: "32px"
  },
  techItem: {
    marginBottom: "5px"
  }
});

Modal.propTypes = propTypes;

export default withStyles(styles)(Modal);
