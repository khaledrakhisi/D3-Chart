import React, { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  format,
  formatDefaultLocale,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from "d3";

import { IUserData } from "../@types/user";

import classes from "./ChartBar.module.scss";

formatDefaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["", "€"],
});

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}
function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}
function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(
        axisLeft(scale).tickSizeInner(12).tickFormat(format("$"))
      );
    }
  }, [scale]);

  return <g ref={ref} width={200} fontSize={9} className="leftaxis" />;
}

interface BarsProps {
  data: IBarChartProps["data"];
  width: number;
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}
function Bars({ data, width, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
      {data.map(({ value, label, color }) => {
        // const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        return (
          <g
            key={`bar-${label}`}
            className={classes.bar}
            // x={scaleX(label)! + scaleX.bandwidth() / 2 - width / 2}
            // y={scaleY(value)}
          >
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
              // width={scaleX.bandwidth()}
              width={width}
              height={height - scaleY(value)}
              fill={color}
            >
              <title>Sales were 8949000 in 1980</title>
            </rect>
          </g>
        );
      })}
    </>
  );
}

interface IBarChartProps {
  data: Array<IUserData>;
  axisYMax?: number;
}
export const ChartBar: React.FunctionComponent<IBarChartProps> = ({
  data,
  axisYMax,
}) => {
  const margin = { top: 10, right: 0, bottom: 20, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width]);
  const scaleY = scaleLinear()
    .domain([0, axisYMax || Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <svg className={classes.barchart}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars
          data={data}
          width={70}
          height={height}
          scaleX={scaleX}
          scaleY={scaleY}
        />
      </g>
    </svg>
  );
};
