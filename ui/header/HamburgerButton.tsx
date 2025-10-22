"use client";

import styles from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  onClick: () => void;
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    // Hamburger icon
    <button className={styles.hamburgerButton} onClick={onClick}>
      <svg
        className={styles.hamburgerIcon}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="8" width="64" height="8" />
        <rect x="0" y="28" width="64" height="8" />
        <rect x="0" y="48" width="64" height="8" />
      </svg>
    </button>
  );
}
