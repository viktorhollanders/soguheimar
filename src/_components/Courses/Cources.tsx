import styles from "./styles.module.css";
import Card from "../Card/Card";

export default function Courses() {
    return (
        <section className={styles.courseContainer}>
            <h1 className={styles.mainHeading}>Námskeið</h1>
            <h2 className={styles.subHeading}>Sagan endalausa</h2>

            <Card
                iconUrl="/images/oz-logo-2.png"
                alt_description="A white dragon flying over a forest"
                price={60000}
                week_nr={1}
                date_from="26. june"
                date_to="1. july"
                link="/"
            />
        </section>
    );
}
