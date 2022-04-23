import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TUserContext } from "../@types/user";
import { Button } from "../components/Button";
import { UserContext } from "../context/user-context";
import { liqidUser } from "../data/mock-user";

import classes from "./LoginPage.module.scss";

export const LoginPage: React.FunctionComponent = () => {
  const { login } = useContext(UserContext) as TUserContext;
  const navigate = useNavigate();
  return (
    <section className={classes.login}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          // Here doing some async actions and fetch user info after authentication confirmed.
          login(liqidUser);
          navigate("/");
        }}
      >
        <h3>Mock Login Form</h3>
        <p>
          In this form the default Liqid user will be loggedin as a mock user.
        </p>
        <p>
          Login Page was required because of Authentication implementation with
          Context API
        </p>
        <Button>Login</Button>
      </form>
    </section>
  );
};
