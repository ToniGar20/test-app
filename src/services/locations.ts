import { Location, Locations } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_RM_API_BASE;

export async function getLocations(page = 1): Promise<Locations> {
  const res = await fetch(`${BASE_URL}/location?page=${page}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Locations - Error obtaining data for page ${page}`);
  }

  return res.json();
}

export async function getLocationById(id: string | number): Promise<Location> {
  const res = await fetch(`${BASE_URL}/location/${id}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Locations - Error obtaining data for location ${id}`);
  }

  return res.json();
}
