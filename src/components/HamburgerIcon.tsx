import React, { useState } from "react";

import "./HamburgerIcon.css";

interface IHamburgerMenuProps {
  onClick: (isExpanded: boolean) => void;
}

export const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = ({
  onClick,
}) => {
  const [isContextMenuExpanded, setIsContextMenuExpanded] =
    useState<boolean>(false);
  const contextMenuButtonClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsContextMenuExpanded(!isContextMenuExpanded);
    onClick(!isContextMenuExpanded);
  };

  return (
    <>
      <button
        className={`main-navigation__menu-btn ${
          isContextMenuExpanded && "open"
        }`}
        onClick={(e) => contextMenuButtonClickHandle(e)}
      >
        <span className="first" />
        <span className="second" />
        <span className="third" />
      </button>
    </>
  );
};
