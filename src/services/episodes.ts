import { Episode, Episodes } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_RM_API_BASE;

export async function getEpisodes(page = 1): Promise<Episodes> {
  const res = await fetch(`${BASE_URL}/episode?page=${page}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Episodes - Error obtaining data for page ${page}`);
  }

  return res.json();
}

export async function getEpisodeById(id: string | number): Promise<Episode> {
  const res = await fetch(`${BASE_URL}/episode/${id}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Episodes - Error obtaining data for episode ${id}`);
  }

  return res.json();
}
