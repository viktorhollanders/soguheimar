import styles from './styles.module.css';

export default function Faq() {
  return (
    <section className={styles.faqContainer}>
      <h1>Algengar Spurningar</h1>
      <div>
        <div className={styles.questionContainer}>
          <p className={styles.questionText}>Question</p>
          <p className={styles.icon}>+</p>
        </div>
        <p className={styles.answerText}>Answer</p>
      </div>
    </section>
  );
}
