import React from "react";

import classes from "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <button className={classes.custombutton}>{children}</button>;
};
