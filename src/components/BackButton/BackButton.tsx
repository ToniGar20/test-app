import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  route: string;
};

export default function BackButton({ route }: Props) {
  return (
    <Link href={route} className={styles.backLink}>
      <ChevronLeft size={24} /> Volver al listado
    </Link>
  );
}
