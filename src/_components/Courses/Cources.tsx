import styles from './styles.module.css';
import Card from '../Card/Card';

export default function Courses() {
  const cources = [
    {
      iconUrl: '/images/nes_icon.jpg',
      weekNr: 1,
      dateFrom: '23. june',
      dateTo: '28. june',
      price: 60000,
      link: '/',
      iconAlt: 'A white dragon flying over a forest',
    },
    {
      iconUrl: '/images/nes_icon.jpg',
      weekNr: 2,
      dateFrom: '1. july',
      dateTo: '6. july',
      price: 60000,
      link: '/',
      iconAlt: 'A white dragon flying over a forest',
    },
    {
      iconUrl: '/images/nes_icon.jpg',
      weekNr: 3,
      dateFrom: '10. july',
      dateTo: '16. july',
      price: 60000,
      link: '/',
      iconAlt: 'A white dragon flying over a forest',
    },
  ];

  return (
    <section className={styles.courseContainer}>
      <h1 className={styles.mainHeading}>Námskeið</h1>
      <h2 className={styles.subHeading}>Sagan endalausa</h2>

      {cources.map((cources, index) => (
        <Card
          key={index}
          iconUrl={cources.iconUrl}
          weekNr={cources.weekNr}
          dateFrom={cources.dateFrom}
          dateTo={cources.dateTo}
          price={cources.price}
          link={cources.link}
          alt_description={cources.iconAlt}
        />
      ))}
    </section>
  );
}
