import '@/app/ui/global.css';
import Sidebar from '@/app/ui/dashboard/sidenav';
import styles from '@/app/ui/dashboard/sidenav.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Sidebar/>
      <main className={styles.mainContent}>{children}</main>
      </body>

    </html>
  );
}
