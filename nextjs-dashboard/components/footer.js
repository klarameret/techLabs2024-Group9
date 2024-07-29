import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src="/to-do-list-logo.png" alt="To-Do-List-Logo" />
            </div>
            <div className={styles.links}>
                <Link href="/datenschutz">
                    <a>Datenschutz</a>
                </Link>
                <Link href="/impressum">
                    <a>Impressum</a>
                </Link>
                <Link href="/kontakt">
                    <a>Kontakt</a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;