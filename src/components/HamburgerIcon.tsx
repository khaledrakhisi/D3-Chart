import React, { useContext } from "react";

import { TUserContext } from "../@types/user";
import { UserContext } from "../context/user-context";

import classes from "./HamburgerIcon.module.scss";

export const HamburgerIcon = () => {
  const { contextMenuState, openContextMenu } = useContext(
    UserContext
  ) as TUserContext;

  return (
    <button
      className={`${classes.hamburgericon} ${contextMenuState && classes.open}`}
      onClick={() => openContextMenu(!contextMenuState)}
    >
      <span className={classes.first} />
      <span className={classes.second} />
      <span className={classes.third} />
    </button>
  );
};
