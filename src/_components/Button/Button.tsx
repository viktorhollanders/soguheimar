import styles from "./styles.module.css";

type ButtonProps = {
    text: string;
    url?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button({ text, url, type = "button" }: ButtonProps) {
    if (url) {
        return (
            <a href={url} className={styles.button}>
                {text}
            </a>
        );
    } else {
        return (
            <button type={type} className={styles.button}>
                {text}
            </button>
        );
    }
}
