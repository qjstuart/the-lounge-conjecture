import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  opensInNewTab?: boolean;
  size: "sm" | "md" | "lg";
  text: string;
  variant: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  const {
    className,
    href,
    opensInNewTab = false,
    size = "md",
    text = "Default text",
    variant = "primary",
    ...delegated
  } = props;

  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    delegated.disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  console.log("classNames: ", classNames);

  if (href) {
    return (
      // NB: Link components can't be "disabled"
      <Link
        className={classNames}
        href={href}
        rel={opensInNewTab ? "noopener noreferrer" : undefined}
        target={opensInNewTab ? "_blank" : undefined}
      >
        <span className={styles.buttonText}>{text}</span>
      </Link>
    );
  }

  return (
    <button className={classNames} disabled={delegated.disabled} {...delegated}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
