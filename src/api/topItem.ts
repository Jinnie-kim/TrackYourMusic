const { VITE_BASE_URL } = import.meta.env;

export const getTopArtists = async (token: string, term: string): Promise<TopItems> => {
  const result = await fetch(`${VITE_BASE_URL}top/artists?limit=5&time_range=${term}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
};

export const getTopTracks = async (token: string, term: string): Promise<TopItems> => {
  const result = await fetch(`${VITE_BASE_URL}top/tracks?limit=5&time_range=${term}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
};
