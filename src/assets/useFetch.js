import { useState, useEffect, useMemo } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    console.log("Fetching data from:", url);
    console.log("With options:", memoizedOptions);

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { ...memoizedOptions, signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("Cleanup: aborting fetch");
      abortController.abort();
    };
  }, [url, memoizedOptions]);

  return { data, loading, error };
};

export default useFetch;
