'use client';

import { useActionState } from 'react';
import styles from './styles.module.css';
import { subscribe } from '@/src/app/actions';

const initialState = {
  message: ' ',
  type: 'normal',
};

export default function MailingList() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <section className={styles.section}>
      <h1 className={styles.mainHeading}>Póstlisti</h1>
      <div className={styles.contentContainer}>
        <p className={styles.callOut}>
          Skráðu þig á póstlista fyrir ævintýri og leiki fyrir allan aldur frá 0 - 100 ára
        </p>
        <form className={styles.form} action={formAction}>
          <p className={`${styles.message} ${styles[`message-${state.type}`]}`}>{state.message}</p>
          <input
            type="text"
            name="email"
            className={styles.input}
            placeholder="Sláðu inn netfangið þitt"
          />

          <button type="submit" className={styles.button} disabled={pending}>
            Skrá mig!
          </button>
        </form>
      </div>
    </section>
  );
}
