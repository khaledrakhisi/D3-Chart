import { useEffect, useRef } from "react";
import { axisLeft, format, formatDefaultLocale, ScaleLinear, select } from "d3";

import classes from "./LeftAxis.module.scss";

formatDefaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["", "€"],
});

export interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}
export function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(
        axisLeft(scale).tickSizeInner(15).tickFormat(format("$")).tickPadding(6)
      );
      // remove first tick 0$
      select(ref.current).select(".tick").remove();
    }
  }, [scale]);

  return <g ref={ref} className={classes.leftaxis} />;
}
