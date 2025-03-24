import type { Metadata } from 'next';
import { getEpisodes } from '@/services/episodes';
import { Episode } from '@/types';
import styles from './styles.module.css';
import EpisodesList from '@/components/EpisodeList';

export const metadata: Metadata = {
  title: 'Listado de episodios | Rick and Morty',
  description: 'Consulta el listado de episodios de la serie de animación Rick and Morty',
};

export default async function Episodes() {
  const data = await getEpisodes();
  const episodes: Episode[] = data.results;

  return (
    <main>
      <h1 className={styles.pageTitle}>Listado de episodios de Rick and Morty</h1>
      <EpisodesList episodes={episodes} />
    </main>
  );
}
