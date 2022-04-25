import { AxisBottomProps } from "./BottomAxis";
import { IBarChartProps } from "./ChartBar";
import { AxisLeftProps } from "./LeftAxis";

import classes from "./Bar.module.scss";

export interface BarsProps {
  data: IBarChartProps["data"];
  width: number;
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}
export function Bars({ data, width, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
      {data.map(({ value, product: label, color }) => {
        /**Bars Color
         * I have no idea if the bars color is Random or pre-definded
         */
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        return (
          <g key={`bar-${label}`} className={classes.bar}>
            <text
              className={classes.label}
              x={scaleX(label)! + scaleX.bandwidth() / 2}
              y={scaleY(value) - 10}
            >
              {value}€
            </text>
            <rect
              className={classes.bar}
              x={scaleX(label)! + scaleX.bandwidth() / 2 - width / 2}
              y={scaleY(value)}
              width={width}
              height={height - scaleY(value)}
              fill={color || randomColor}
            />
          </g>
        );
      })}
    </>
  );
}
