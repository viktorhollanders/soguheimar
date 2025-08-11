'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

const navLinks = [
  { id: 1, name: 'Söguheimar', path: '/' },
  { id: 2, name: 'Félagið', path: '/about' },
  { id: 3, name: 'Framlög', path: '/donations' },
];

export default function NavBar() {
  const pathname = usePathname();

  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const navRef = useRef<HTMLElement>(null);
  const navItemRef = useRef(Array(navLinks.length).fill(null));

  useEffect(() => {
    const linkIndex = navLinks.findIndex((link) => pathname === link.path);

    if (navRef.current && navItemRef.current[0]) {
      const navPos = navRef.current.getBoundingClientRect();
      const linkPos = navItemRef.current[linkIndex].getBoundingClientRect();

      const calculatePos = linkPos.left - navPos.left;
      setIndicatorPosition(calculatePos);
    }
  }, [pathname]);

  return (
    <nav
      className={styles.nav}
      ref={(node) => {
        navRef.current = node;
      }}
    >
      <h3 className={styles.indicator} style={{ left: `${indicatorPosition}px` }}>
        Söguheimar
      </h3>
      <ul className={styles.navList}>
        {navLinks.map((link, index) => {
          return (
            <li className={styles.navItem} key={link.id}>
              <Link
                className={`${styles.link} ${pathname === link.path ? `${styles.active}` : ``}`}
                href={link.path}
                ref={(node) => {
                  navItemRef.current[index] = node;
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
