import Link from "next/link";

import styles from "./DesktopHeaderNavItem.module.scss";

interface DesktopHeaderNavItemProps {
  href: string;
  isActive: boolean;
  title: string;
}

export default function DesktopHeaderNavItem({
  href,
  isActive,
  title,
}: DesktopHeaderNavItemProps) {
  return (
    <li className={styles.desktopHeaderNavItem}>
      <span
        className={`${styles.navBullet} ${isActive ? styles.active : ""}`}
      ></span>
      <Link className={styles.desktopHeaderNavLink} href={href}>
        {title}
      </Link>
    </li>
  );
}
