import { Character } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_RM_API_BASE;

export async function getCharactersByIds(urls: string[]): Promise<Character[]> {
  if (!urls.length) return [];

  const ids = urls.map((url) => url.split('/').pop()).join(',');
  const res = await fetch(`${BASE_URL}/character/${ids}`);

  if (!res.ok) {
    throw new Error('Characters - Error fetching characters');
  }

  const data = await res.json();
  const rawCharacters = Array.isArray(data) ? data : [data];

  return rawCharacters.map((char: Character) => ({
    id: char.id,
    name: char.name,
    image: char.image,
  }));
}
