import React from "react";

import { ReactComponent as ICON } from "../assets/images/Group 1.svg";

import classes from "./Avatar.module.scss";

const Avatar: React.FunctionComponent = () => {
  return (
    <div className={classes.avatar}>
      <ICON />
    </div>
  );
};

export default Avatar;
