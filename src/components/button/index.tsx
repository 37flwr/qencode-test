import { type PropsWithChildren, type ReactNode } from "react";
import cn from "classnames";

import "./styles.scss";

type Props = PropsWithChildren & {
  onClick: () => void;
  variant?: "primary" | "bordered";
  size?: "small" | "large";
  type?: "button" | "submit" | "reset";
};

function Button({ onClick, variant, size, type, children }: Props): ReactNode {
  return (
    <button
      onClick={onClick}
      className={cn(
        "button",
        variant === "bordered" ? "button_bordered" : "button_primary",
        size === "small" && "button_small"
      )}
      type={type || "button"}
    >
      {children}
    </button>
  );
}

export { Button };
