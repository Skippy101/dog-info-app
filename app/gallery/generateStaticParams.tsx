// app/gallery/generateStaticParams.tsx
import fs from 'fs';
import path from 'path';
import sharp from 'sharp'; // to calculate the aspect ratio of images

export async function generateStaticParams() {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const imageFiles = fs.readdirSync(galleryPath);

  // Create an array of image metadata with src and aspect ratio
  const images = await Promise.all(
    imageFiles.map(async (fileName) => {
      const imagePath = path.join(galleryPath, fileName);
      
      // Use Sharp to get image dimensions and handle EXIF orientation
      //const { width, height } = await sharp(imagePath).rotate().metadata();
      let { orientation, width, height } = await sharp(imagePath).metadata();
      console.log({ fileName, orientation, width, height });
      if (orientation === 6 || orientation === 8) {
        [width, height] = [height, width]; // Swap width and height if orientation is 6 or 8
      }
      const aspectRatio = width && height ? width / height : 1.778; // Default to 1 if unable to calculate
      //const aspectRatio = 1;
      return {
        src: `/gallery/${fileName}`,
        aspect_ratio: aspectRatio,
        width: width,
        height: height,
        tags: {},
        orientation: orientation,
        overlay: `${fileName}`,
      };
    })
  );

  return images;
}
