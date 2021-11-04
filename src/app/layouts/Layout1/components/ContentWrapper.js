import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapperRoot: {
      backgroundColor: "#2c2d2f",
      minHeight: "100vh",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "& .sub-header": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.6rem 1rem",
        borderBottom: "1px dashed rgba(255, 255, 255, 0.2)",
        borderColor: theme.palette.primary.main,
        "& h2": {
          fontSize: "2.3rem",
          fontWeight: "bold",
          color: "rgba(0, 150, 250, 0.7)",
        },

        "& .icon": {
          color: "rgba(0, 150, 250, 0.7)",
        },
      },
    },
  })
);

const ContentWrapper = ({ children, title, icon }) => {
  const classes = useStyles();

  return (
    <section
      className={classnames(
        classes.wrapperRoot,
        "sm:p-2 md:p-8 sm:ml-0 sm:mt-12 md:ml-48 md:mt-0"
      )}
    >
      <div className="sub-header">
        <h2>{title}</h2>
        <Icon className="icon">{icon}</Icon>
      </div>
      {children}
    </section>
  );
};

ContentWrapper.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

ContentWrapper.defaultProps = {
  title: "Header",
  icon: "star",
};

export default ContentWrapper;
