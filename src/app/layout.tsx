import type { Metadata } from "next";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Söguheimar",
    description: "Upplifðu ævintýrið á eigin skinni",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
