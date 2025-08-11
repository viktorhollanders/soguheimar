import Image from 'next/image';
import styles from './styles.module.css';
import NavBar from '../NavBar/Navbar';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/icons/soguheimar-logo.png"
        height={57}
        width={57}
        alt="Logo"
        priority
      />

      <NavBar />
    </header>
  );
}
