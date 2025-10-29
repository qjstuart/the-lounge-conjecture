"use client";

import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/config/navLinks";

import styles from "./DesktopHeaderNav.module.scss";
import DesktopHeaderNavItem from "./DesktopHeaderNavItem";

export default function DesktopHeaderNav() {
  const currentPath = usePathname();

  return (
    <nav className={styles.desktopHeaderNav}>
      <ul>
        {NAV_LINKS.map((link) => (
          <DesktopHeaderNavItem
            href={link.href}
            isActive={link.href === currentPath}
            key={link.href}
            title={link.title}
          />
        ))}
      </ul>
    </nav>
  );
}
