import Image from "next/image";
import Button from "../Button/Button";
import styles from "./styles.module.css";

type CardProps = {
    iconUrl: string;
    alt_description: string;
    price: number;
    weekNr: number;
    dateFrom: string;
    dateTo: string;
    link: string;
};

export default function Card({
    iconUrl,
    alt_description,
    price,
    weekNr,
    dateFrom,
    dateTo,
    link,
}: CardProps) {
    const formatedPrice = price.toLocaleString("de-DE");

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <Image
                    src={iconUrl}
                    alt={alt_description}
                    className={styles.icon}
                    width={40}
                    height={40}
                />
                <div className={styles.info}>
                    <p className={styles.weekInfo}>Week {`${weekNr}`}</p>
                    <p className={styles.date_info}>
                        {`${dateFrom}`} — {`${dateTo}`}
                    </p>
                </div>
            </div>
            <p className={styles.cardPrice}>{formatedPrice} kr</p>
            <Button text="Ská" url={link} />
        </div>
    );
}
