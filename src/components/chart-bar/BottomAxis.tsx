import { useEffect, useRef } from "react";
import { axisBottom, ScaleBand, select } from "d3";

import classes from "./BottomAxis.module.scss";

export interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}
export function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(
        axisBottom(scale).tickSizeInner(15).tickPadding(8)
      );
    }
  }, [scale]);

  return <g ref={ref} transform={transform} className={classes.bottomaxis} />;
}
