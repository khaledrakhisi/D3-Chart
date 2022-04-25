import React from "react";
import { formatDefaultLocale, scaleBand, scaleLinear } from "d3";

import { IUserData } from "../../@types/user";

import { Bars } from "./Bar";
import { AxisBottom } from "./BottomAxis";
import { AxisLeft } from "./LeftAxis";

import classes from "./ChartBar.module.scss";

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
export const ChartBar: React.FunctionComponent<IBarChartProps> = ({
  data,
  axisYMax,
}) => {
  const margin = { top: 10, right: 0, bottom: 20, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ product: label }) => label))
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
