import Link from 'next/link';
import { Container } from "../Container/container";
import styles from "./footer.module.css";
import { FaFacebookSquare ,FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";





export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p>All Rights Reserved - Aon2023</p>
                    <div className={styles.media}>
                        <ul>
                            <li>
                                <Link href={"/"}><FaFacebookSquare /></Link>
                            </li>
                            <li >
                                <Link href={"/"}><FaInstagramSquare /></Link>
                            </li>
                            <li>
                                <Link href={"/"}><FaSquareTwitter /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}