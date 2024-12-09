import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (urlWithCacheBuster) => {
    setLoading(true);
    let allData = [];
    let page = 1;
    let hasNextPage = true;

    try {
      while (hasNextPage) {
        const response = await axios.get(`${urlWithCacheBuster}&page=${page}`);
        allData = [...allData, ...response.data];

        // Assuming the response contains pagination info to check if there are more pages
        hasNextPage = response.headers["x-wp-totalpages"] > page;
        page++;
      }
      setData(allData);
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
