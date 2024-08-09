'use client';
import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login versucht mit:', email, password);
        // Hier würde später die Authentifizierungslogik implementiert werden
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.title}>Login</h2>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">
                            E-Mail
                        </label>
                        <input
                            className={styles.input}
                            id="email"
                            type="email"
                            placeholder="E-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">
                            Passwort
                        </label>
                        <input
                            className={styles.input}
                            id="password"
                            type="password"
                            placeholder="Passwort"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Einloggen
                    </button>
                </form>
            </div>
        </div>
    );
}