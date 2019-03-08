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
  "@font-face": [
    {
      fontFamily: "Camphor",
      src: "url(fonts/300-regular.woff2)",
      fontWeight: "normal",
      fontStyle: "normal"
    },
    {
      fontFamily: "Camphor",
      src: "url(fonts/600-bold.woff2)",
      fontWeight: "bold",
      fontStyle: "normal"
    }
  ],
  "@global": {
    html: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      boxSizing: "border-box"
    },
    body: {
      margin: 0,
      backgroundColor: theme.primary,
      color: theme.color,
      fontSize: "100%",
      fontFamily: ["Camphor", "Open Sans", "Segoe UI", "sans-serif"],
      fontWeight: "normal",
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
    div: {
      color: theme.color
    },
    "*, *::before, *::after": {
      boxSizing: "inherit"
    }
  }
});

export default withStyles(styles)(Baseline);

// Inspired by Material-UI baseline CSS. - Thanks...
