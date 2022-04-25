import { useEffect, useRef } from "react";
import { axisBottom, ScaleBand, select } from "d3";

export interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}
export function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}
