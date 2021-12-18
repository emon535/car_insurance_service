export const sendRequest = async (url, method, queryParams) => {
    url = new URL(url);
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => url.searchParams.append(key, value));
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  };
  