import { generateStaticParams } from './generateStaticParams';
import GalleryClient from './GalleryClient';

const GalleryPage = async () => {
  const images = await generateStaticParams();
  return <GalleryClient images={images} />;
};

export default GalleryPage;
