import React, { useState } from "react";
import { scaleBand, scaleLinear } from "d3";

import { IUserData } from "../../@types/user";

import { Bars } from "./Bar";
import { AxisBottom } from "./BottomAxis";
import { AxisLeft } from "./LeftAxis";
import { Tooltip } from "./Tooltip";

import classes from "./Chart.module.scss";

export interface IChartProps {
  data: Array<IUserData>;
  axisYMax?: number;
}
export const Chart: React.FunctionComponent<IChartProps> = ({
  data,
  axisYMax,
}) => {
  const [hoveredBar, setHoveredBar] = useState<IUserData | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const margin = { top: 10, right: 0, bottom: 30, left: 60 };
  const width = 700 - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ product: { name } }) => name))
    .range([0, width]);
  const scaleY = scaleLinear()
    .domain([
      0,
      axisYMax || Math.max(...data.map(({ product: { total } }) => total)),
    ])
    .range([height, 0]);

  return (
    <>
      <svg className={classes.barchart}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars
            data={data}
            width={80}
            height={height}
            scaleX={scaleX}
            scaleY={scaleY}
            onMouseOverHandle={(datum, e) => {
              setPos({ x: e.pageX, y: e.pageY });
              setHoveredBar(datum);
            }}
            onMouseOutHandle={() => setHoveredBar(null)}
          />
        </g>
      </svg>
      {hoveredBar && <Tooltip bar={hoveredBar} pos={pos} width={150} />}
    </>
  );
};
