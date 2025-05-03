import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

type SocialMediaLinkProps = {
    link: string;
    iconUrl: string;
    name: string;
};

export default function SocialMediaLink({
    link,
    iconUrl,
    name,
}: SocialMediaLinkProps) {
    return (
        <Link className={styles.link} href={link}>
            <Image src={iconUrl} alt={`${name} icon`} height={16} width={16} />
            <p className={styles.linkText}>{name}</p>
        </Link>
    );
}
