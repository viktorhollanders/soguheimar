import Image from "next/image";
import styles from "./styles.module.css";
import Header from "../_components/Header/Header";

export default function Home() {
    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <p className={styles.heroText}>
                    Sumarbúðir söguheima eru sex daga ferðalag um sagnaheim
                    ævintýrisins sem í boði er hverju sinni. Ævintýrið á sér
                    stað í ævintýra dalnum í fallegu umhverfi Lækjarbotna. Þar
                    reisum við tjöldin okkar og kveikjum upp varðeld undir
                    gullnu þaki heimsins. Við ætlum að kynnast heiminum,
                    náttúrunni og hvert öðru í gegnum útiveru og leik. Við munum
                    horfa á eftir miðnætursólinni, sofa í tjöldunum og sitja við
                    eldinn og búa saman í eina viku. Á daginn munum við æfa
                    sirkus og dans, læra að tálga og skjóta boga, elda ljúfengan
                    mat og mála úti með vatnslitum, teikna og segja sögur.
                </p>
            </div>
        </main>
    );
}
