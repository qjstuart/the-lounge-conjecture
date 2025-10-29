import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/config/navLinks";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
  onNavLinkClick: () => void;
}

// TODO: Pass in list of links and map to <Link /> elements?
export default function Sidebar({ isOpen, onNavLinkClick }: SidebarProps) {
  const [safeToApplyTransition, setSafeToApplyTransition] = useState(false);

  // Wait for a negligible amount of time (0ms) just so the browser renders
  // the sidebar first without any transition on the transform property.
  // This prevents the sidebar from appearing or flashing on page load.
  useEffect(() => {
    const id = setTimeout(() => setSafeToApplyTransition(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${
        safeToApplyTransition ? styles.sidebarTransition : ""
      }`}
    >
      {/* TODO: Add graphic / asset / links? */}
      <div className={styles.sidebarHeader}>
        <span>Logo / Asset?</span>
        <span>Links?</span>
      </div>
      <nav>
        <ul className={styles.navLinksUl}>
          {NAV_LINKS.map((link) => (
            <li className={styles.navLinkLi} key={link.href}>
              <Link
                className={styles.navLink}
                href={link.href}
                onClick={onNavLinkClick}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
