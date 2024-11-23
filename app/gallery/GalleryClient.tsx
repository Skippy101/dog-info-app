'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gallery as NextGallery } from 'next-gallery';
import styles from '@/app/components/Gallery.module.css';
import shuffleArray from '@/app/utils/shuffleArray';

const widths = [800, 1200];
const ratios = [2.2, 4, 5];

const overlayStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  fontSize: '0.8rem',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.8)',
  padding: '0.2rem',
} as const;

interface GalleryClientProps {
  images: { src: string; aspect_ratio: number; overlay?: string }[];
}

const GalleryClient = ({ images }: GalleryClientProps) => {
  const [seed, setSeed] = useState(42);

  const shuffleGallery = () => {
    setSeed((prevSeed) => prevSeed + 1);
  };

  const shuffledImages = shuffleArray(images, seed);

  return (
    <div className={styles.container}>
      <div className={styles.buttonRow}>
        <Link href="/" className={styles.button}>
          Home
        </Link>
        <button onClick={shuffleGallery} className={styles.button}>
          Shuffle
        </button>
      </div>
      <div className={styles.galleryContainer}>
        <NextGallery
          widths={widths}
          ratios={ratios}
          images={shuffledImages}
          gap="1px"
          lastRowBehavior="preserve"
          overlay={(i) => (
            <div style={overlayStyle}>{shuffledImages[i].overlay}</div>
          )}
        />
      </div>
      <div className={styles.buttonRow}>
        <Link href="/" className={styles.button}>
          Home
        </Link>
        <button onClick={shuffleGallery} className={styles.button}>
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default GalleryClient;
