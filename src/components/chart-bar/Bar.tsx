import React from "react";

import { IUserData } from "../../@types/user";

import { AxisBottomProps } from "./BottomAxis";
import { IBarChartProps } from "./Chart";
import { AxisLeftProps } from "./LeftAxis";

import classes from "./Bar.module.scss";

export interface BarsProps {
  data: IBarChartProps["data"];
  width: number;
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
  onMouseOverHandle?: (datum: IUserData, e: React.MouseEvent) => void;
  onMouseOutHandle?: (datum: IUserData) => void;
}
export function Bars({
  data,
  width,
  height,
  scaleX,
  scaleY,
  onMouseOutHandle,
  onMouseOverHandle,
}: BarsProps) {
  return (
    <>
      {data.map((datum) => {
        /**Bars Color
         * I have no idea if the bars color is Random or pre-definded
         */
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        return (
          <g key={`bar-${datum.product.name}`} className={classes.bar}>
            <text
              className={classes.label}
              x={scaleX(datum.product.name)! + scaleX.bandwidth() / 2}
              y={scaleY(datum.product.total) - 10}
            >
              {datum.product.total}€
            </text>
            <rect
              className={classes.bar}
              x={
                scaleX(datum.product.name)! + scaleX.bandwidth() / 2 - width / 2
              }
              y={scaleY(datum.product.total)}
              width={width}
              height={height - scaleY(datum.product.total)}
              fill={datum.color || randomColor}
              onMouseMove={(e) => {
                onMouseOverHandle?.(datum, e);
              }}
              onMouseOut={() => onMouseOutHandle?.(datum)}
            />
          </g>
        );
      })}
    </>
  );
}
