import Hero from '../_components/Hero/Hero';
import Courses from '../_components/Courses/Courses';
import MailingList from '../_components/MailingList/MailingList';
import Faq from '../_components/Faq/Faq';

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Courses />
      <MailingList />
      <Faq />
    </main>
  );
}
