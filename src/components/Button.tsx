import React from "react";

import "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
