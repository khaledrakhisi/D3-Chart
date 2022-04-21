import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MenuItem.module.scss";

interface IMenuItemProps {
  children: React.ReactNode;
}

export const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  children,
}) => {
  return (
    <NavLink className={classes.menuitem} to="/">
      {children}
    </NavLink>
  );
};
