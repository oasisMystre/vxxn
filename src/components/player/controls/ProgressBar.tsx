import "./ProgressBar.style.css";
import { useMemo } from "react";

type ProgressBarProps = {
  value: number;
  className?: string;
};

export default function ProgressBar({ value, className }: ProgressBarProps) {
  const percentage = useMemo(() => value * 100, [value]);
  return (
    <input
      type="range"
      className={className}
      max={100}
    />
  );
}
