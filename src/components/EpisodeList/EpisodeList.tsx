'use client';

import { useState } from 'react';
import { Episode } from '@/types';
import ItemCard from '@/components/ItemCard';
import Searcher from '@/components//Searcher';
import styles from './styles.module.css';

type Props = {
  episodes: Episode[];
};

export default function EpisodesList({ episodes }: Props) {
  const [search, setSearch] = useState('');

  const filtered = episodes.filter((ep) => ep.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Searcher value={search} onChange={setSearch} />

      <ul className={styles.episodeList}>
        {filtered.map((episode) => (
          <ItemCard key={episode.id} item={episode} />
        ))}
      </ul>
    </>
  );
}
