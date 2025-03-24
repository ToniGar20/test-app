'use client';

import { useState } from 'react';
import { Location } from '@/types';
import ItemCard from '@/components/ItemCard';
import Searcher from '@/components/Searcher';
import styles from './styles.module.css';

type Props = {
  locations: Location[];
};

export default function LocationList({ locations }: Props) {
  const [search, setSearch] = useState('');

  const filtered = locations.filter((loc) => loc.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Searcher value={search} onChange={setSearch} />

      <ul className={styles.locationList}>
        {filtered.map((location) => (
          <ItemCard key={location.id} item={location} />
        ))}
      </ul>
    </>
  );
}
