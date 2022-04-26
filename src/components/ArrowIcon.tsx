import React, { useState } from "react";

import { ReactComponent as Arrow } from "../assets/images/arrow.svg";

import classes from "./ArrowIcon.module.scss";

export enum EArrowDirection {
  toLeft = -1,
  toRight = 1,
}
interface IArrowIconProps {
  onClick: (direction: EArrowDirection) => void;
}

export const ArrowIcon: React.FunctionComponent<IArrowIconProps> = ({
  onClick,
}) => {
  const [arrowDirection, setArrowDirection] = useState<EArrowDirection>(1);
  return (
    <Arrow
      className={`${classes.arrow}`}
      style={{
        transform: `rotate(${arrowDirection === -1 ? -180 : 0}deg)`,
      }}
      onClick={() => {
        setArrowDirection(arrowDirection === -1 ? 1 : -1);
        onClick(arrowDirection);
      }}
    />
  );
};
