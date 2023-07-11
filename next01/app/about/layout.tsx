import React from "react";
import styles from "./styles.module.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <nav>About NavBar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
}
