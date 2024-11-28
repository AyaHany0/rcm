import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useState, useCallback } from "react";

//instance
const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
});

// interface
interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (config?: AxiosRequestConfig) => Promise<void>;
}

export function useApi<T>(
  defaultConfig?: AxiosRequestConfig
): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (config?: AxiosRequestConfig) => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.request<T>({
          ...defaultConfig,
          ...config,
        });
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [defaultConfig]
  );

  return { data, loading, error, fetchData };
}
