'use client';

import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href={routes.episodes}>
            <Image src="/rm-logo.png" alt="logo" width={235} height={60} priority />
          </Link>
        </div>
        <ul className={styles.navbarMenu}>
          <li>
            <Link
              href="/episodes"
              className={clsx(styles.link, {
                [styles.activeTab]: pathname.startsWith('/episodes'),
              })}
            >
              Episodios
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className={clsx(styles.link, {
                [styles.activeTab]: pathname.startsWith('/locations'),
              })}
            >
              Localizaciones
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
