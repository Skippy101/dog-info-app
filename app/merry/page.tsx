// app/merry/page.tsx
import DogLayout from '@/app/components/DogLayout';

const merryInfo = {
  name: 'Merry',
  dob: '2024-03-25',
  sex: 'Female',
  breed: 'Long Haired Dachshund',
  color: 'Chocolate',
  weight: '5.3 kg',
  image: '/images/merry.jpg',
};

export default function MerryPage() {
  return <DogLayout dogInfo={merryInfo} />;
}
