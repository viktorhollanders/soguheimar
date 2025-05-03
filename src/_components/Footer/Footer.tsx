import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
    const socialAccounts = [
        {
            name: "Facebook",
            url: "/icons/instagram.svg",
            link: "#",
        },
        {
            name: "Instagram",
            url: "/icons/facebook.svg",
            link: "#",
        },
    ];

    const mapLink = "#";

    return (
        <footer className={styles.footer}>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoHeader}>Fylgið okkur</h2>
                {socialAccounts.map((account, index) => (
                    <SocialMediaLink
                        key={index}
                        link={account.link}
                        iconUrl={account.url}
                        name={account.name}
                    />
                ))}
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoHeader}>Heimilisfang</h2>
                <p className={styles.address}>Lækjarbotnalandi 53</p>
                <p className={styles.address}>203 Kópavogur</p>
                <p className={styles.address}>Ísland</p>
                <Link
                    id={styles.mapLink}
                    className={styles.link}
                    href={mapLink}
                >
                    Sjá kort
                </Link>
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoHeader}>Hafa samband</h2>
                <div className={styles.contactItem}>
                    <p className={styles.contactLable}>Email:</p>
                    <a
                        className={styles.link}
                        href="mailto:söguheimar@gmail.com"
                    >
                        söguheimar@gmail.com
                    </a>
                </div>
                <div className={styles.contactItem}>
                    <p className={styles.contactLable}>Phone:</p>
                    <a className={styles.link} href="tel:8993377">
                        899-3377
                    </a>
                    <span className={styles.seperator}>/</span>
                    <a className={styles.link} href="tel:8921142">
                        892-1142
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>© 2025 Söguheimar</p>
        </footer>
    );
}
