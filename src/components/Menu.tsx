import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { TUserContext } from "../@types/user";
import { ReactComponent as ExitIcon } from "../assets/images/exit.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/settings.svg";
import { ReactComponent as UserIcon } from "../assets/images/user.svg";
import { UserContext } from "../context/user-context";

import classes from "./Menu.module.scss";

export const Menu = () => {
  const { loggedinUser, logoff } = useContext(UserContext) as TUserContext;

  const logoutButtonHandle = () => {
    // todo: logout actions
    logoff();
  };
  return (
    <menu>
      {loggedinUser && (
        <NavLink
          className={`${classes.menuitem} ${classes.logout}`}
          onClick={logoutButtonHandle}
          to="/login"
        >
          <ExitIcon className={classes.icon} /> Logout
        </NavLink>
      )}
      {loggedinUser && (
        <NavLink className={classes.menuitem} to="/">
          <HomeIcon className={classes.icon} /> Home
        </NavLink>
      )}
      {loggedinUser ? (
        <NavLink className={classes.menuitem} to="/profile">
          <UserIcon className={classes.icon} /> Profile
        </NavLink>
      ) : (
        <NavLink className={classes.menuitem} to="/login">
          <UserIcon className={classes.icon} /> Login
        </NavLink>
      )}
      {loggedinUser && (
        <NavLink className={classes.menuitem} to="/settings">
          <SettingsIcon className={classes.icon} /> Settings
        </NavLink>
      )}
    </menu>
  );
};
