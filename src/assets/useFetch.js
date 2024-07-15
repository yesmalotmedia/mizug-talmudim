import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (urlWithCacheBuster) => {
    setLoading(true);
    try {
      const response = await axios.get(urlWithCacheBuster);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;
    fetchData(urlWithCacheBuster);
  }, [url]);

  const refetch = () => {
    const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;
    fetchData(urlWithCacheBuster);
  };

  return { data, loading, error, refetch };
}

export default useFetch;
