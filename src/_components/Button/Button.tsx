import styles from "./styles.module.css";

type ButtonProps = {
    text: string;
    url: string;
};

export default function Button({ text, url }: ButtonProps) {
    return <button className={styles.button}>{text}</button>;
}
