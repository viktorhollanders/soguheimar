import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

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

            <div className={styles.nav_wrapper}>
                <h3 className={styles.indicator}>Söguheimar</h3>
                <nav className={styles.nav}>
                    <Link className={styles.link} href="/">
                        Söguheimar
                    </Link>
                    <Link className={styles.link} href="#">
                        Félagið
                    </Link>
                    <Link className={styles.link} href="#">
                        Framlög
                    </Link>
                </nav>
            </div>
        </header>
    );
}
