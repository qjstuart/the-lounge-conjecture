import Image from "next/image";
import styles from "./page.module.css";

import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Button
        href="https://theloungeconjecture.com/"
        opensInNewTab={true}
        size="md"
        text="Sign guestbook"
        variant="primary"
      />
    </div>
  );
}
