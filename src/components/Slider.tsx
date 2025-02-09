import Range from "rc-slider";
import "rc-slider/assets/index.css";

type ProgressBarProps = {
  className?: string;
  value: number | number[];
} & Omit<React.ComponentProps<typeof Range>, "classNames">;

export default function Slider({
  className,
  max = 100,
  ...props
}: ProgressBarProps) {
  return (
    <div
      id="slider"
      tabIndex={-1}
      className={className}
    >
      <Range
        max={max}
        classNames={{
          handle: "handle",
          track: "!bg-white",
          rail: "!bg-white/50",
        }}
        {...props}
      />
    </div>
  );
}
