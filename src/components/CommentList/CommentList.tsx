'use client';

import { useComments } from '@/context/CommentsContext';
import styles from './styles.module.css';

export default function CommentList({ episodeId }: { episodeId: string }) {
  const { getComments } = useComments();
  const comments = getComments(episodeId);

  if (!comments.length) {
    return <p className={styles.text}>No hay comentarios aún.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.commentListTitle}>Comentarios del episodio</h3>
      <ul className={styles.commentList}>
        {comments.map((c, i) => (
          <li key={i} className={styles.commentItem}>
            <span>{c.name}</span>
            {c.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
