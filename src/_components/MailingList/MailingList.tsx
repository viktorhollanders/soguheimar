"use client";

import styles from "./styles.module.css";
import { subscribe } from "@/src/app/actions/subscribe";

function SubmitButton() {
    return (
        <button type="submit" className={styles.button}>
            Skrá mig!
        </button>
    );
}

export default function MailingList() {
    return (
        <section className={styles.section}>
            <h1 className={styles.mainHeading}>Póstlisti</h1>
            <div className={styles.contentContainer}>
                <p className={styles.callOut}>
                    Skráðu þig á póstlista fyrir ævintýri og leiki fyrir allan
                    aldur frá 0 – 100 ára
                </p>
                <form className={styles.form} action={subscribe}>
                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="Sláðu inn netfangið þitt"
                    />
                    <SubmitButton />
                </form>
            </div>
        </section>
    );
}
