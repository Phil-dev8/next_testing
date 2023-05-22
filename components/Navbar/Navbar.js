import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className="link-navbar" href="/">
        Accueil
      </Link>
      <Link className="link-navbar" href="/Listes">
        Listes
      </Link>
      <Link className="link-navbar" href="/btc">
        BTC
      </Link>
    </nav>
  );
}
