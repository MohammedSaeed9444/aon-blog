import { Container } from '@/components/Container/container';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>Aon 2023</h1>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/'}>Help</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};