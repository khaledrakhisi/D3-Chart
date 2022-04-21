import { Brand } from "./Brand";

import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Brand isInversed={false} />
    </footer>
  );
};
