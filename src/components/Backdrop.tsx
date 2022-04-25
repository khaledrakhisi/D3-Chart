import React from "react";

import { Brand } from "./Brand";

import classes from "./Backdrop.module.scss";

interface IBackdropProps {
  children: React.ReactNode;
  onClickHandle: (event: React.MouseEvent) => void;
}

export const Backdrop: React.FunctionComponent<IBackdropProps> = ({
  children,
  onClickHandle,
}) => {
  return (
    <aside className={classes.backdrop} onClick={(e) => onClickHandle}>
      {children}
      <Brand isInversed />
    </aside>
  );
};
