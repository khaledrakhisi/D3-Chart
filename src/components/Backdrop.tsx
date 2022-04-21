import React from "react";

import { Brand } from "./Brand";

import classes from "./Backdrop.module.scss";

interface IBackdropProps {
  children: React.ReactNode;
}

export const Backdrop: React.FunctionComponent<IBackdropProps> = ({
  children,
}) => {
  return (
    <aside className={classes.backdrop}>
      {children}
      <section className={classes.brand}>
        <Brand isInversed />
      </section>
    </aside>
  );
};
