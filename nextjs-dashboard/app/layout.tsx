import '@/app/ui/global.css';
import { kanit } from '@/app/ui/fonts';
import Sidebar from '@/app/ui/dashboard/sidenav';
import styles from '@/app/ui/dashboard/sidenav.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>{children}
      <Sidebar/>
      <main className={styles.mainContent}>{children}</main>
      </body>

    </html>
  );
}
