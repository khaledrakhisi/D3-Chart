import React from "react";

import classes from "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode;

  onClickHandle?: () => void;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  onClickHandle,
}) => {
  return (
    <button className={classes.custombutton} onClick={onClickHandle}>
      {children}
    </button>
  );
};
