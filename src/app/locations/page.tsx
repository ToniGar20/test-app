import type { Metadata } from 'next';
import { getLocations } from '@/services/locations';
import { Location } from '@/types';
import LocationList from '@/components/LocationList';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Listado de localizaciones | Rick and Morty',
  description: 'Consulta el listado de localizaciones de la serie de animación Rick and Morty',
};

export default async function Locations() {
  const data = await getLocations();
  const locations: Location[] = data.results;

  return (
    <main>
      <h1 className={styles.pageTitle}>Listado de localizaciones en Rick and Morty</h1>
      <LocationList locations={locations} />
    </main>
  );
}
