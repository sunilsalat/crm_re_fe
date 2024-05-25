import { baseUrl, registerUrl } from '@/config/config';

export const commonFetch = async ({
  url,
  payload,
  method = 'POST',
}: {
  method?: string;
  url: string;
  payload?: any;
}) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-cache',
    });

    return response.json();
  } catch (error: any) {
    console.error(' Error:', error);
  }
};
