import { useEffect, useRef } from "react";
import { axisLeft, format, ScaleLinear, select } from "d3";

import classes from "./LeftAxis.module.scss";

export interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}
export function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(
        axisLeft(scale).tickSize(3).tickSizeInner(12).tickFormat(format("$"))
      );
    }
  }, [scale]);

  return <g ref={ref} className={classes.leftaxis} />;
}
