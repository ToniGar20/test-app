export const routes = {
  episodes: '/episodes',
  episodeDetail: (id: string | number) => `/episodes/${id}`,

  locations: '/locations',
  locationDetail: (id: string | number) => `/locations/${id}`,
};
