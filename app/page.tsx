import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Meet the Furry Fellowship!</h1>
      <div className={styles.cardContainer}>
        <Link href="/merry">
          <div className={styles.card}>
            <Image
              src="/images/merry.jpg"
              alt="Merry"
              width={200}
              height={200}
              className={styles.cardImage}
            />
            <h2>Merry</h2>
          </div>
        </Link>
        <Link href="/pippin">
          <div className={styles.card}>
            <Image
              src="/images/pippin.jpg"
              alt="Pippin"
              width={200}
              height={200}
              className={styles.cardImage}
            />
            <h2>Pippin</h2>
          </div>
        </Link>
        <Link href="/gallery">
          <div className={styles.card}>
            <Image
              src="/images/gallery.jpg"
              alt="Gallery"
              width={200}
              height={200}
              className={styles.cardImage}
            />
            <h2>Gallery</h2>
          </div>
        </Link>
      </div>
    </main>
  );
}
