'use client';

import { useState } from 'react';
import { useComments } from '@/context/CommentsContext';
import { postComment } from '@/services/comments';
import styles from './styles.module.css';

type Props = {
  episodeId: string;
};

export default function CommentForm({ episodeId }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { addComment } = useComments();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await postComment(formData);
      addComment(episodeId, formData);
      setStatus('success');
      setFormData({ name: '', email: '', comment: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>Deja tu comentario sobre el episodio</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nombre*
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email*
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Comentario*
          <textarea
            className="textarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            maxLength={500}
            required
          />
        </label>

        <button className="button" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Enviando...' : 'Enviar'}
        </button>

        {status === 'success' && <p className="success">¡Comentario enviado con éxito!</p>}
        {status === 'error' && <p className="error">Hubo un error al enviar el comentario.</p>}
      </form>
    </div>
  );
}
