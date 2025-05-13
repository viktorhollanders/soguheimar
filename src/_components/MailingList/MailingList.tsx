"use client";

// import { useState } from "react";s
import Form from "next/form";
import Button from "../Button/Button";
import styles from "./styles.module.css";

export default function MailingList() {
    return (
        <section className={styles.section}>
            <h1 className={styles.mainHeading}>Póstlisti</h1>
            <div className={styles.contentContainer}>
                <p className={styles.callOut}>
                    Skráðu þig á póstlista fyrir ævintýri og leiki fyrir allan
                    aldur frá 0 – 100 ára
                </p>
                <Form className={styles.form} action="/submit">
                    <input
                        className={styles.input}
                        name="/query"
                        placeholder="Sláðu inn netfangið þitt"
                    />
                    <Button text="Submit" variant="large" />
                </Form>
            </div>
        </section>
    );
}
