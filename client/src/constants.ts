export const API_URL: any =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_API_URL;

export const SEARCH_API_URL: any =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_SEARCH_API_URL;
