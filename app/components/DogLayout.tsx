import Image from 'next/image';
import Link from 'next/link';
import { calculateAge } from '@/app/utils/calculateAge';
import styles from './DogLayout.module.css';

interface DogInfo {
  name: string;
  dob: string;
  sex: string;
  breed: string;
  color: string;
  weight: string;
  image: string;
}

interface DogLayoutProps {
  dogInfo: DogInfo;
}

export default function DogLayout({ dogInfo }: DogLayoutProps) {
  return (
    <div className={styles.container}>
      <Image
        src={dogInfo.image}
        alt={dogInfo.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <ul className={styles['info-list']}>
        <li>
          <strong>Name:</strong> {dogInfo.name}
        </li>
        <li>
          <strong>Date of Birth:</strong> {dogInfo.dob}
        </li>
        <li>
          <strong>Age:</strong> {calculateAge(dogInfo.dob)}
        </li>
        <li>
          <strong>Sex:</strong> {dogInfo.sex}
        </li>
        <li>
          <strong>Breed:</strong> {dogInfo.breed}
        </li>
        <li>
          <strong>Color:</strong> {dogInfo.color}
        </li>
        <li>
          <strong>Weight:</strong> {dogInfo.weight}
        </li>
      </ul>
      <Link href="/" className={styles.homeButton}>
        Home
      </Link>
    </div>
  );
}
