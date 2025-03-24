'use client';

import styles from './styles.module.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function Searcher({ value, onChange }: Props) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Realiza tu búsqueda por nombre..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
