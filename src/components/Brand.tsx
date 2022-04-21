import React from "react";

import { ReactComponent as Icon } from "../assets/images/liqid.svg";

import classes from "./Brand.module.scss";

interface IBrandProps {
  isInversed: boolean;
}

export const Brand: React.FunctionComponent<IBrandProps> = ({ isInversed }) => {
  return (
    <div className={classes.brand}>
      <Icon className={`${classes.icon} ${isInversed && classes.inversed}`} />
    </div>
  );
};
