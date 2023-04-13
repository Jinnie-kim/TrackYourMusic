const { VITE_BASE_URL } = import.meta.env;

export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const result = await fetch(`${VITE_BASE_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
};
