import { getEpisodeById } from '@/services/episodes';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from './styles.module.css';
import BackButton from '@/components/BackButton/BackButton';
import { routes } from '@/config/routes';
import CharactersList from '@/components/CharacterList';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList/CommentList';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const episode = await getEpisodeById(id);
  if (!episode) return { title: 'Episodio no encontrado' };

  return {
    title: `${episode.name} | Rick and Morty`,
    description: `Detalle del episodio ${episode.name} (${episode.episode})`,
  };
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { id } = await params;
  const episode = await getEpisodeById(id);

  if (!episode) notFound();

  return (
    <div className={styles.wrapper}>
      <BackButton route={routes.episodes} />

      <h1 className={styles.title}>{episode.name}</h1>
      <p className={styles.subInfo}>
        {episode.episode} · Emitido el{' '}
        {new Date(episode.air_date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <h2 className={styles.subtitle}>Personajes que aparecen en {episode.name}</h2>
      <CharactersList urls={episode.characters} />
      <CommentForm episodeId={id} />
      <CommentList episodeId={id} />
    </div>
  );
}
