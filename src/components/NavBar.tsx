import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { TUserContext } from "../@types/user";
import { UserContext } from "../context/user-context";

import Avatar from "./Avatar";
import { Backdrop } from "./Backdrop";
import { Brand } from "./Brand";
import { HamburgerIcon } from "./HamburgerIcon";
import { Menu } from "./Menu";

import classes from "./NavBar.module.scss";

const NavBar: React.FunctionComponent = () => {
  const [isContextMenuExpanded, setIsContextMenuExpanded] =
    useState<boolean>(false);

  const HamburgerIconClickHandler = (isExpanded: boolean) => {
    setIsContextMenuExpanded(isExpanded);
  };

  const h = () => {
    setIsContextMenuExpanded(false);
    // console.log("jkhkjhkjh");
  };

  const { loggedinUser } = useContext(UserContext) as TUserContext;

  return (
    <>
      {isContextMenuExpanded && (
        <Backdrop onClickHandle={h}>
          <Menu />
        </Backdrop>
      )}
      <nav className={classes.navBar}>
        {/* In this section when ever the user is loggedin, her/his Avatar and a greeting message will be shown,
        otherwise just a LOGO will be shown instead.
        */}
        {loggedinUser ? (
          <div className={classes.userinfo}>
            <NavLink to="/profile">
              <Avatar isInversed={isContextMenuExpanded} />
            </NavLink>
            <span>Hallo,&nbsp;</span>
            <NavLink className={classes.link} to="/profile">
              {`${loggedinUser.name}!`}
            </NavLink>
          </div>
        ) : (
          // if user not loggedin
          <Brand isInversed={false} />
        )}
        {loggedinUser && <div className={classes.divider} />}
        <section className={classes.topmenu}>
          <Menu />
        </section>
        <div className={classes.hamburger}>
          <HamburgerIcon onClick={HamburgerIconClickHandler} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
