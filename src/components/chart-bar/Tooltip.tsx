import React from "react";

import { IUserData } from "../../@types/user";

import classes from "./Tooltip.module.scss";

export interface IPosition {
  x: number;
  y: number;
}

interface ITooltipProps {
  pos: IPosition;
  width: number;
  bar: IUserData;
}

export const Tooltip: React.FunctionComponent<ITooltipProps> = ({
  bar,
  pos,
  width,
}) => {
  const position = {
    x: `${
      pos.x + width > window.outerWidth ? pos.x - width - 10 : pos.x + 20
    }px`,
    y: `${pos.y + 72 > window.outerHeight ? pos.y - 80 : pos.y}px`,
  };

  return (
    <section
      data-testid="tooltip"
      className={classes.tooltip}
      style={{
        left: position.x,
        top: position.y,
        width: width,
      }}
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
        <span>{bar.product.growth}%</span>
      </div>
    </section>
  );
};
