import { Brand } from "./Brand";

import classes from "./Backdrop.module.scss";

export const Backdrop = () => {
  return (
    <aside className={classes.backdrop}>
      <Brand isInversed />
    </aside>
  );
};
