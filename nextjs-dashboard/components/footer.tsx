import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerlinks}>
                <h3><a href="/kontakt">Kontakt</a></h3>
                <h3><a href="/datenschutz">Datenschutz</a></h3>
                <h3><a href="/impressum">Impressum</a></h3>
            </div>
            <div className={styles.copyright}>© Copyright 2024</div>
        </footer>
    );
}
