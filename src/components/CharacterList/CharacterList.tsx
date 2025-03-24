'use client';

import { useRef } from 'react';
import useCharacters from '@/hooks/useCharacters';
import Image from 'next/image';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CharactersList({ urls }: { urls: string[] }) {
  const { characters, loading, error } = useCharacters(urls);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 150;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (loading || error) return <p>Cargando personajes...</p>;

  return (
    <div className={styles.carouselWrapper}>
      <button onClick={() => scroll('left')} className={styles.arrow}>
        <ChevronLeft size={24} />
      </button>

      <div className={styles.carousel} ref={containerRef}>
        {characters.map((char) => (
          <div key={char.id} className={styles.character}>
            <Image
              src={char.image}
              alt={char.name}
              width={60}
              height={60}
              className={styles.avatar}
            />
            <p className={styles.characterName}>{char.name}</p>
          </div>
        ))}
      </div>

      <button onClick={() => scroll('right')} className={styles.arrow}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
