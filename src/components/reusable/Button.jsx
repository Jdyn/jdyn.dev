import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Defines the `margin` style property.
   */
  margin: PropTypes.string,
  /**
   * Defines the `width` style property.
   */
  width: PropTypes.string,
  /**
   * Defines the `onClick` React property.
   */
  onClick: PropTypes.func,
  /**
   * Defines the button types
   */
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

const Button = props => (
  <button
    onClick={props.onClick}
    className={props.secondary ? props.classes.secondary : props.classes.primary}
  >
    {props.children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = {
  margin: "0",
  width: "175px"
};

const styles = theme => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    outline: "none",
    border: "none",
    fontWeight: 700,
    fontSize: 16,
    padding: "0 15px",
    borderRadius: 8,
    height: "50px",
    letterSpacing: ".025em",
    textTransform: "uppercase",
    transitionDuration: ".15s",
    boxShadow:
      "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 35px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)"
    },
    "&:active": {
      transform: "translateY(3px)"
    }
  },
  primary: props => ({
    extend: "button",
    margin: "20px auto",
    backgroundColor: theme.accent,
    color: "#fff",
    height: "50px",
    borderRadius: 10,
    width: props.width,
    "@media (min-width: 650px)": {
      margin: "20px auto 20px 20px"
    }
  }),
  secondary: {
    extend: "button"
  }
});

export default withStyles(styles)(Button);

// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// color: "#fff",
// outline: "none",
// border: "none",
// backgroundColor: theme.accent,
// borderRadius: 10,
// fontSize: "15px",
// height: "50px",
// padding: "0 15px",
// margin: "20px auto",
// "@media (min-width: 650px)": {
//   margin: "20px auto 20px 20px"
// },
// fontWeight: 700,
// cursor: "pointer",
// width: "150px",
// zIndex: 50,
// boxShadow:
//   "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
// textTransform: "uppercase",
// letterSpacing: "0.125em",
// transitionDuration: ".2s",
// "&:hover": {
//   transform: "translateY(-3px)",
//   boxShadow:
//     "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 35px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)"
// },
// "&:active": {
//   transform: "translateY(3px)"
// }
