import styles from "./Footer.module.scss";

interface FooterProps {
  className: string;
}

export default function Footer({ className }: FooterProps) {
  return <footer className={className}>Footer</footer>;
}
