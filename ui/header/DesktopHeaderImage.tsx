"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import sampler from "@/assets/images/akai-s3000i-003399-80.png";
import tapeMachine from "@/assets/images/akai-tape-machine-cc6633.png";
import cdj from "@/assets/images/cdj-350-ddd691-80.png";
import turntable from "@/assets/images/turntable-000033.png";
import flightCase from "@/assets/images/vinyl-flight-case-open-cc9966.png";

import styles from "./Header.module.scss";

export default function DesktopHeaderImage() {
  const currentPath = usePathname();

  let headerImage: StaticImageData;
  let altText: string;
  let className: string = "";

  switch (currentPath) {
    case "/":
      headerImage = turntable;
      altText = "Turntable";
      className = "dropShadowTurntable";
      break;
    case "/discography":
      headerImage = tapeMachine;
      altText = "Tape Machine";
      className = "dropShadowTapeMachine";
      break;
    case "/hi-fi":
      headerImage = cdj;
      altText = "CDJ Player";
      className = "dropShadowCdj";
      break;
    case "/shop":
      headerImage = flightCase;
      altText = "Records Flight Case";
      className = "dropShadowFlightCase";
      break;
    case "/guestbook":
      headerImage = sampler;
      altText = "Sampler";
      className = "dropShadowSampler";
      break;
    default:
      headerImage = turntable;
      altText = "Turntable";
      className = "dropShadowTurntable";
  }

  return (
    <div className={styles.desktopHeaderImageContainer}>
      <Image
        className={`${styles.desktopHeaderImage} ${styles[className]}`}
        src={headerImage}
        alt={altText}
        fill
        priority
      />
    </div>
  );
}
