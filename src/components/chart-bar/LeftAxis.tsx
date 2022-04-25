import { useEffect, useRef } from "react";
import { axisLeft, format, ScaleLinear, select } from "d3";

export interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}
export function AxisLeft({ scale }: AxisLeftProps) {
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
