import { NavLink } from "react-router-dom";

import { ReactComponent as ExitIcon } from "../assets/images/exit.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/settings.svg";
import { ReactComponent as UserIcon } from "../assets/images/user.svg";

import classes from "./Menu.module.scss";

export const Menu = () => {
  return (
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
  );
};
