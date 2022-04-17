import React, { useState } from "react";

import "./HamburgerIcon.css";

export const HamburgerIcon = () => {
  const [isContextMenuExpanded, setIsContextMenuExpanded] =
    useState<boolean>(false);
  const contextMenuButtonClickHandle = () => {
    setIsContextMenuExpanded(!isContextMenuExpanded);
  };

  return (
    <>
      <button
        className={`main-navigation__menu-btn ${
          isContextMenuExpanded && "open"
        }`}
        onClick={contextMenuButtonClickHandle}
      >
        <span className="first" />
        <span className="second" />
        <span className="third" />
      </button>
    </>
  );
};
