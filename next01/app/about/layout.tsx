import React from 'react';
import styles from './styles.module.css';
import { Suspense } from 'react';
import Loading from './loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>About NavBar</nav>
            <Suspense fallback={<Loading />}>
                <main className={styles.main}>{children}</main>
            </Suspense>
        </>
    );
}
