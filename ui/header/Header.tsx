import Link from "next/link";

import DesktopHeaderImage from "./DesktopHeaderImage";
import DesktopHeaderNav from "./DesktopHeaderNav";
import styles from "./Header.module.scss";
import MobileNavControls from "./MobileNavControls";

export default function Header({ className }: { className: string }) {
  return (
    <header className={className}>
      {/* Mobile header */}
      <div className={styles.mobileHeader}>
        <MobileNavControls />
        <Link className={styles.mobileHeaderTitle} href="/">
          The Lounge Conjecture
        </Link>
      </div>

      {/* Desktop header */}
      <div className={styles.desktopHeader}>
        <div className={styles.desktopHeaderTitleAndNav}>
          <Link className={styles.desktopHeaderTitle} href="/">
            The Lounge Conjecture
          </Link>
          <DesktopHeaderNav />
        </div>

        <DesktopHeaderImage />
      </div>
    </header>
  );
}
