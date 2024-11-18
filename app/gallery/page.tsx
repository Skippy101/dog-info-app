// app/gallery/page.tsx
import Link from 'next/link';
import { Gallery as NextGallery } from 'next-gallery'
import styles from '@/app/components/Gallery.module.css';
import { generateStaticParams } from './generateStaticParams';
import shuffleArray from '@/app/utils/shuffleArray';


/**
 * For an explanation of widths and ratios, see: 
 * https://github.com/fmkra/next-gallery/tree/development
**/
const widths = [800, 1200]
const ratios = [2.2, 4, 5]
const overlayStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  fontSize: '0.8rem',
  //backgroundColor: 'rgba(0, 0, 0, 0.3)',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.8)',
  padding: '0.2rem',

} as const

const GalleryPage = async () => {
  // Fetch static image data at build time
  const images = await generateStaticParams();
  const shuffledImages = shuffleArray(images);

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        {/* <NextGallery {...{ widths, ratios, images: shuffledImages }} lastRowBehavior="preserve" /> */}
        <NextGallery 
          widths={widths} 
          ratios={ratios} 
          images={shuffledImages}
          gap='2px'
          lastRowBehavior="preserve"
          overlay={(i) => (
            <div style={overlayStyle}>
                {shuffledImages[i].overlay}
            </div>
          )}
        />
      </div>
      <Link href="/" className={styles.homeButton}>
        Home
      </Link>
    </div>
  );
};

export default GalleryPage;
