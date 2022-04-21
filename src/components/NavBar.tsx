import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ExitIcon } from "../assets/images/exit.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/settings.svg";
import { ReactComponent as UserIcon } from "../assets/images/user.svg";

import Avatar from "./Avatar";
import { Backdrop } from "./Backdrop";
import { HamburgerMenu } from "./HamburgerIcon";
import { Menu } from "./Menu";

import classes from "./NavBar.module.scss";

const NavBar: React.FunctionComponent = () => {
  const [isContextMenuExpanded, setIsContextMenuExpanded] =
    useState<boolean>(false);

  const HamburgerIconClickHandler = (isExpanded: boolean) => {
    setIsContextMenuExpanded(isExpanded);
  };

  return (
    <>
      {isContextMenuExpanded && (
        <React.Fragment>
          <Backdrop>
            <Menu />
          </Backdrop>
        </React.Fragment>
      )}
      <nav className={classes.navBar}>
        <div className={classes.userinfo}>
          <NavLink to="/profile">
            <Avatar isInversed={isContextMenuExpanded} />
          </NavLink>
          <span>Hallo,&nbsp;</span>
          <NavLink className={classes.link} to="/profile">
            {"LIQID!"}
          </NavLink>
        </div>
        <div className={classes.divider} />
        <section className={classes.topmenu}>
          <Menu />
        </section>
        <div className={classes.hamburger}>
          <HamburgerMenu onClick={HamburgerIconClickHandler} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
