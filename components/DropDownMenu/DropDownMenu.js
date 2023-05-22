import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.glowonhover} onClick={toggleMenu}>
        Toggle Menu
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
