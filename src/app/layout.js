import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Order Food Online from India's Best Food Delivery Service | Swiggy",
    description:
        "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
