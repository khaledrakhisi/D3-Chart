import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ExitIcon } from "../assets/images/exit.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/settings.svg";
import { ReactComponent as UserIcon } from "../assets/images/user.svg";

import Avatar from "./Avatar";
import { HamburgerIcon } from "./HamburgerIcon";

import classes from "./NavBar.module.scss";

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={classes.navBar}>
      <NavLink to="/">
        <Avatar />
      </NavLink>
      <NavLink className={classes.userinfo} to="/">
        Hallo,&nbsp;<span>{"LIQID!"}</span>
        <section className={classes.logout}>
          <div className={classes.divider} />
          <NavLink className={classes.menuitem} to="/">
            <ExitIcon className={classes.icon} /> Logout
          </NavLink>
        </section>
      </NavLink>
      <menu>
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
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export default NavBar;
