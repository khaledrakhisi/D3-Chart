import React from "react";

import { IUserData } from "../../@types/user";

import classes from "./Tooltip.module.scss";

interface ITooltipProps {
  xPos: number;
  yPos: number;
  bar: IUserData;
}

export const Tooltip: React.FunctionComponent<ITooltipProps> = ({
  xPos,
  yPos,
  bar,
}) => {
  const position = {
    x: `${xPos + 20}px`,
    y: `${yPos}px`,
  };

  return (
    <div
      className={classes.tooltip}
      style={{ left: position.x, top: position.y }}
    >
      <div className={classes.field}>
        <h3>Total:</h3>
        <span>{bar.product.total} €</span>
      </div>
      <div className={classes.field}>
        <h3>Initial invest.:</h3>
        <span>{bar.product.initialInvest} €</span>
      </div>
      <div className={classes.field}>
        <h3>Growth:</h3>
        <span>{(bar.product.total * 100) / bar.product.initialInvest}%</span>
      </div>
    </div>
  );
};
