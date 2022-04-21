import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ExitIcon } from "../assets/images/exit.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/settings.svg";
import { ReactComponent as UserIcon } from "../assets/images/user.svg";

import Avatar from "./Avatar";
import { Backdrop } from "./Backdrop";
import { HamburgerMenu } from "./HamburgerIcon";

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
          <Backdrop />
        </React.Fragment>
      )}
      <nav className={classes.navBar}>
        <NavLink to="/">
          <Avatar isInversed={isContextMenuExpanded} />
        </NavLink>
        <NavLink className={classes.userinfo} to="/">
          Hallo,&nbsp;<span>{"LIQID!"}</span>
          {/* <section className={classes.logout}> */}
          {/* </section> */}
        </NavLink>
        <div className={classes.divider} />
        <menu>
          <NavLink className={`${classes.menuitem} ${classes.logout}`} to="/">
            <ExitIcon className={classes.icon} /> Logout
          </NavLink>
          <NavLink className={classes.menuitem} to="/">
            <HomeIcon className={classes.icon} /> Home
          </NavLink>
          <NavLink className={classes.menuitem} to="/">
            <UserIcon className={classes.icon} /> Profile
          </NavLink>
          <NavLink className={classes.menuitem} to="/">
            <SettingsIcon className={classes.icon} /> Settings
          </NavLink>
        </menu>
        <div className={classes.hamburger}>
          <HamburgerMenu onClick={HamburgerIconClickHandler} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
