import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLink.module.scss";

interface INavLinkProps {
  children: React.ReactChild;
  path: string;
}
const NavigationLink: React.FunctionComponent<INavLinkProps> = ({
  children,
  path,
}) => {
  return (
    <NavLink className={classes.navLink} to={path}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
