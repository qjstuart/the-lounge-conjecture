import Link from "next/link";

import styles from "./MobileNavControls.module.scss";

// TODO: Pass in list of links and map to <Link /> elements?
export default function Sidebar() {
  return (
    <div className={`${styles.sidebar} ${styles.open}`}>
      <nav className={styles.mobileNav}>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/discography">Discography</Link>
          </li>
          <li>
            <Link href="/hifi">Hi-Fi</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/guestbook">Guestbook</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
