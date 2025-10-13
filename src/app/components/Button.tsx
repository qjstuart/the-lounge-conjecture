import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
  variant: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  const {
    className,
    href,
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
      <Link className={classNames} href={href}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classNames} disabled={delegated.disabled} {...delegated}>
      {text}
    </button>
  );
}
