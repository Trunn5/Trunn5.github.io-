export const fetchXKCDid = async (email: string): Promise<number> => {
  const params = new URLSearchParams({ email });
  const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch ID');
  }
  const data = await response.json();
  return data;
};

export const fetchXKCDdata = async (id: number): Promise<any> => {
  const params = new URLSearchParams({ id: id.toString() });
  const response = await fetch(`https://fwd.innopolis.university/api/comic?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comic data');
  }
  return response.json();
};
