import styles from "./Header.module.scss";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      {/* Mobile layout */}
      <div className={styles["mobile-header"]}>
        {/* Hamburger icon */}
        <svg
          className={styles["hamburger-icon"]}
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="8" width="64" height="8" />
          <rect x="0" y="28" width="64" height="8" />
          <rect x="0" y="48" width="64" height="8" />
        </svg>

        {/* Header title */}
        <span className={styles["header-title"]}>The Lounge Conjecture</span>
      </div>

      {/* TODO: Desktop layout */}
    </header>
  );
}
