import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { Brand } from "./Brand";

import classes from "./Backdrop.module.scss";

interface IBackdropProps {
  visible: boolean;
  children: React.ReactNode;
  onClickHandle: (event: React.MouseEvent) => void;
}

export const Backdrop: React.FunctionComponent<IBackdropProps> = ({
  visible,
  children,
  onClickHandle,
}) => {
  const docBody = useRef(document.body);
  useEffect(() => {
    if (visible) {
      // When the modal is shown, we want a fixed body
      docBody.current.style.top = `-${window.scrollY}px`;
      docBody.current.style.position = "fixed";
    } else {
      // When the modal is hidden...
      const scrollY = document.body.style.top;
      docBody.current.style.position = "";
      docBody.current.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [visible]);
  return (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.backdrop} onClick={(e) => onClickHandle(e)}>
        {children}
        <Brand isInversed />
      </aside>
    </CSSTransition>
  );
};
