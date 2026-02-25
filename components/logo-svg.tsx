import { ComponentPropsWithoutRef } from "react";



type Props = ComponentPropsWithoutRef<"svg">;

export function LogoIcon({ className, ...props }: Props) {
  return (
    <svg
      className={className}
      width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1109_2517)">
        <rect x="18" width="4" height="40" fill="var(--foreground)" />
        <rect x="27" y="3" width="4" height="34" fill="var(--foreground)" />
        <rect x="9" y="3" width="4" height="34" fill="var(--foreground)" />
        <rect x="36" y="11" width="4" height="18" fill="var(--foreground)" />
        <rect y="11" width="4" height="18" fill="var(--foreground)" />
      </g>
      <defs>
        <clipPath id="clip0_1109_2517">
          <rect width="40" height="40" fill="var(--foreground)" />
        </clipPath>
      </defs>
    </svg>

  )
}
