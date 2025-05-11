"use client";

import { useState } from "react";
import Form from "next/form";
import Button from "../Button/Button";

export default function MailingList() {
    return (
        <section className="mailingListContainer">
            <h1>Póstlisti</h1>
            <p>
                Skráðu þig á póstlista fyrir ævintýri og leiki fyrir allan aldur
                frá 0 – 100 ára
            </p>
            <Form action="/submit">
                <input name="/query" />
                <Button text="Submit" />
            </Form>
        </section>
    );
}
