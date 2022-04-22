import React, { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from "d3";

import { IUserData } from "../interfaces/IUserData";

// import classes from "./ChartBar.module.scss";

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
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} width={300} />;
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
      {data.map(({ value, label }) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        return (
          <g key={`bar-${label}`}>
            <text
              x={scaleX(label)! + scaleX.bandwidth() / 2 - width / 2}
              y={scaleY(value)}
            >
              {value}€
            </text>
            <rect
              x={scaleX(label)! + scaleX.bandwidth() / 2 - width / 2}
              y={scaleY(value)}
              // width={scaleX.bandwidth()}
              width={width}
              height={height - scaleY(value)}
              fill={`#${randomColor}`}
            />
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
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width]);
  const scaleY = scaleLinear()
    .domain([0, axisYMax || Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
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
