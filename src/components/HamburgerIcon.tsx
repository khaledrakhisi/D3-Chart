import React, { useState } from "react";

import classes from "./HamburgerIcon.module.scss";

interface IHamburgerMenuProps {
  onClick: (isExpanded: boolean) => void;
}

export const HamburgerIcon: React.FunctionComponent<IHamburgerMenuProps> = ({
  onClick,
}) => {
  const [isContextMenuExpanded, setIsContextMenuExpanded] =
    useState<boolean>(false);
  const contextMenuButtonClickHandle = (e: React.MouseEvent) => {
    setIsContextMenuExpanded(!isContextMenuExpanded);
    onClick(!isContextMenuExpanded);
  };

  return (
    <>
      <button
        className={`${classes.hamburgericon} ${
          isContextMenuExpanded && classes.open
        }`}
        onClick={(e) => contextMenuButtonClickHandle(e)}
      >
        <span className={classes.first} />
        <span className={classes.second} />
        <span className={classes.third} />
      </button>
    </>
  );
};
