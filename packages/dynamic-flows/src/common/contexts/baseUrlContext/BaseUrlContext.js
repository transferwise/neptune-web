import { createContext, useContext } from 'react';

export const BaseUrlContext = createContext({
  baseUrl: null,
});

/**
 * Provides the baseUrl for dynamic flows asynchronous operations.
 */
export const useBaseUrl = () => {
  const { baseUrl } = useContext(BaseUrlContext);
  if (baseUrl === null || baseUrl === undefined) {
    throw new Error('BaseUrl must not be null or undefined');
  }
  return baseUrl;
};
