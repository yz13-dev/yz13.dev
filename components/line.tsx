import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg"> & {
  opacity?: number;
};
export const VerticalLineDashed = ({ className, opacity = 1, strokeDasharray = 12, ...props }: Props) => {
  return (
    <svg width="1" height="100%" className={className} {...props}>
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        stroke="var(--border)"
        strokeOpacity={opacity}
        strokeDasharray={strokeDasharray}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const HorizontalLineDashed = ({ className, opacity = 1, strokeDasharray = 12, ...props }: Props) => {
  return (
    <svg width="100%" height="1" className={className} {...props}>
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        strokeOpacity={opacity}
        strokeDasharray={strokeDasharray}
        stroke="var(--border)"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const VerticalLine = ({ className, opacity = 1, ...props }: Props) => {
  return (
    <svg width="1" height="100%" className={className} {...props}>
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        stroke="var(--border)"
        strokeOpacity={opacity}
      />
    </svg>
  );
};

export const HorizontalLine = ({ className, opacity = 1, ...props }: Props) => {
  return (
    <svg width="100%" height="1" className={className} {...props}>
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="var(--border)"
        strokeOpacity={opacity}
      />
    </svg>
  );
};
