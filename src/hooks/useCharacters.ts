import useSWR from 'swr';
import { getCharactersByIds } from '@/services/characters';

const fetchCharacters = async (urls: string[]) => {
  return getCharactersByIds(urls);
};

export default function useCharacters(urls: string[]) {
  const idsKey = urls
    ?.map((url) => url.split('/').pop())
    .filter(Boolean)
    .sort()
    .join(',');

  const { data, error, isLoading } = useSWR(
    urls.length ? idsKey : null,
    () => fetchCharacters(urls),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  return {
    characters: data || [],
    loading: isLoading,
    error,
  };
}
