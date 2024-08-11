'use client';

import Link from 'next/link';
import { useState } from 'react';
import __navLinks from '@/app/ui/dashboard/nav-links';
import styles from '@/app/ui/dashboard/sidenav.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/kalender">Kalender
              </Link>
              <ul>
                <li><Link href="/kalender/heute">Heute</Link></li>
                <li><Link href="/kalender/diese-woche">Diese Woche</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/tasks">
                Alle Tasks
              </Link>
            </li>
            <li>
              <Link href="/projekte">
                Projekte
              </Link>
              <ul>
                <li><Link href="/tasks/projekt1">Projekt 1</Link></li>
                <li><Link href="/tasks/projekt2">Projekt 2</Link></li>
                <li><Link href="/tasks/projekt3">Projekt 3</Link></li>
              </ul>
            </li>
            <li><Link href="/archiv">Archiv</Link></li>
            <li>
              <Link href="/neues-projekt" passHref>
                <button className={styles.newListButton}>
                  + Neues Projekt
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;