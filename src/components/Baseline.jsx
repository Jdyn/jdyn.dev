import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

const defaultProps = {
  children: null
};

const Baseline = props => props.children;

Baseline.propTypes = propTypes;
Baseline.defaultProps = defaultProps;

const styles = theme => ({
  "@global": {
    html: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      boxSizing: "border-box"
    },
    body: {
      margin: 0,
      backgroundColor: theme.primaryWhite,
      fontSize: "100%",
      fontFamily: ["Open Sans", "Segoe UI", "sans-serif"],
      fontWeight: 400,
      fontStyle: "normal",
      webkitTextSizeAdjust: "100%",
      textRendering: "optimizeLegibility",
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
    "*, *::before, *::after": {
      boxSizing: "inherit"
    }
  }
});

export default withStyles(styles)(Baseline);

// Inspired by Material-UI baseline CSS. - Thanks...
