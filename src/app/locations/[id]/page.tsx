import { getLocationById } from '@/services/locations';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from './styles.module.css';
import CharactersList from '@/components/CharacterList';
import BackButton from '@/components/BackButton/BackButton';
import { routes } from '@/config/routes';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const location = await getLocationById(id);
  if (!location) return { title: 'Localización no encontrada' };

  return {
    title: `${location.name} | Rick and Morty`,
    description: `Detalle de la localización ${location.name} (${location.type})`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { id } = await params;
  const location = await getLocationById(id);

  if (!location) notFound();

  return (
    <div className={styles.wrapper}>
      <BackButton route={routes.locations} />

      <h1 className={styles.title}>{location.name}</h1>
      <p className={styles.subInfo}>{}</p>

      <h2 className={styles.subtitle}>Personajes que viven en {location.name}</h2>
      <CharactersList urls={location.residents} />
    </div>
  );
}
