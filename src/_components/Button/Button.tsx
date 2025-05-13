import styles from "./styles.module.css";

type ButtonProps = {
    text: string;
    url?: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "large";
};

export default function Button({
    text,
    url,
    type = "button",
    variant = "default",
}: ButtonProps) {
    const buttonClass = `${styles.button} ${variant !== "default" ? styles[variant] : ""}`;

    if (url) {
        return (
            <a href={url} className={buttonClass}>
                {text}
            </a>
        );
    } else {
        return (
            <button type={type} className={buttonClass}>
                {text}
            </button>
        );
    }
}
