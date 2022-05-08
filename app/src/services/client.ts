export type HTTPMethod = "GET" | "POST";

export const handleRequest = async (
  url: string,
  method: HTTPMethod,
  body?: any
) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }

    throw new Error(response.statusText);
  } catch (err) {
    let msg;

    if (err instanceof Error) msg = err.message;
    else msg = "Unknown error occurred.";

    return Promise.reject(msg);
  }
};
