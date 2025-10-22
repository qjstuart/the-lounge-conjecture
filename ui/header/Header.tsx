import styles from "./Header.module.scss";
import MobileNavControls from "./MobileNavControls";

export default function Header() {
  return (
    <header>
      {/* Mobile header */}
      <div className={styles.mobileHeader}>
        <MobileNavControls />
        <span className={styles.mobileHeaderTitle}>The Lounge Conjecture</span>
      </div>

      {/* TODO: Desktop header */}
      <div className={styles.desktopHeader}></div>
    </header>
  );
}
