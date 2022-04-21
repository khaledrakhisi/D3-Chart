import React from "react";

import { ReactComponent as Icon } from "../assets/images/Group 1.svg";

import classes from "./Avatar.module.scss";

interface IAvaterProps {
  isInversed: boolean;
}

const Avatar: React.FunctionComponent<IAvaterProps> = ({ isInversed }) => {
  return (
    <div className={`${classes.avatar} ${isInversed && classes.inversed}`}>
      <Icon className={`${classes.icon} ${isInversed && classes.inversed}`} />
    </div>
  );
};

export default Avatar;
