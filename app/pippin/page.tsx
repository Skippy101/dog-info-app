// app/merry/page.tsx
import DogLayout from '@/app/components/DogLayout';

const pippinInfo = {
  name: 'Pippin',
  dob: '2024-03-25',
  sex: 'Male',
  breed: 'Long Haired Dachshund',
  color: 'Chocolate',
  weight: '6.1 kg',
  image: '/images/pippin.jpg',
};

export default function PippinPage() {
  return <DogLayout dogInfo={pippinInfo} />;
}
