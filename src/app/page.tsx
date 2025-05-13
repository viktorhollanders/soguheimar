import Hero from "../_components/Hero/Hero";
import Courses from "../_components/Courses/Cources";
import MailingList from "../_components/MailingList/MailingList";

export default function Home() {
    return (
        <main className="main">
            <Hero />
            <Courses />
            <MailingList />
        </main>
    );
}
