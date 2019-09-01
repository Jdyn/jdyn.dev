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
      backgroundColor: theme.tertiary,
      color: theme.color,
      fontSize: "100%",
      fontDisplay: "swap",
      fontFamily: ["Museo Sans Rounded", "Open Sans", "Segoe UI", "sans-serif"],
      fontWeight: "normal",
      fontStyle: "normal",
      webkitTextSizeAdjust: "100%",
      textRendering: "optimizeLegibility"
    },
    "body, div": {
      color: theme.color,
      "@media (min-width: 1025px)": {
        "&::-webkit-scrollbar": {
          width: "8px"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#999",
          borderRadius: 6,
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.2)"
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.primary,
          webkitBoxShadow: "inset 0 0 6px transparent"
        },
        "&::-webkit-scrollbar-button": {
          width: "0",
          height: "0",
          display: "none"
        }
      }
    },
    "*, *::before, *::after": {
      boxSizing: "inherit"
    }
  }
});

export default withStyles(styles)(Baseline);
