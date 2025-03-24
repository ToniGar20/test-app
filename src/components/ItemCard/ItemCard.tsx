import Link from 'next/link';
import { Episode } from '@/types';
import styles from './styles.module.css';
import { Item } from '@/types';
import { routes } from '@/config/routes';

type Props = {
  item: Item;
};

function isEpisode(item: Item): item is Episode {
  return (item as Episode).episode !== undefined;
}

function translateDate(date: string) {
  const itemDate = date;
  const newDate = new Date(itemDate);

  return newDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function ItemCard({ item }: Props) {
  return (
    <div className={styles.episodeCard}>
      <div className={styles.episodeHeader}>
        <h2>{item.name}</h2>

        {isEpisode(item) ? (
          <span className={styles.episodeCode}>{item.episode}</span>
        ) : (
          <span className={styles.episodeCode}>{item.type}</span>
        )}
      </div>

      {isEpisode(item) ? (
        <>
          <p className={styles.episodeAirDate}>Emitido el {translateDate(item.air_date)}</p>
          <p className={styles.episodeCharCount}>
            Personajes que aparecen: {item.characters.length}
          </p>
          <Link href={routes.episodeDetail(item.id)} className={styles.episodeLink}>
            Ver detalles del episodio
          </Link>
        </>
      ) : (
        <>
          <p className={styles.episodeAirDate}>Dimensión: {item.dimension}</p>
          <p className={styles.episodeCharCount}>Residentes: {item.residents.length}</p>
          <Link href={routes.locationDetail(item.id)} className={styles.episodeLink}>
            Ver detalles de la localización
          </Link>
        </>
      )}
    </div>
  );
}
