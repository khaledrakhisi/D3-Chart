import React, { useState } from "react";
import { formatDefaultLocale, scaleBand, scaleLinear } from "d3";

import { IUserData } from "../../@types/user";

import { Bars } from "./Bar";
import { AxisBottom } from "./BottomAxis";
import { AxisLeft } from "./LeftAxis";
import { Tooltip } from "./Tooltip";

import classes from "./Chart.module.scss";

formatDefaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["", "€"],
});

export interface IBarChartProps {
  data: Array<IUserData>;
  axisYMax?: number;
}
export const Chart: React.FunctionComponent<IBarChartProps> = ({
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
      {hoveredBar && <Tooltip bar={hoveredBar} pos={pos} />}
      {/* <Tooltip bar={data[0]} xPos={pos[0]} yPos={pos[1]} /> */}
    </>
  );
};
