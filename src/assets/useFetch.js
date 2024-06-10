// import { useState, useEffect, useMemo } from "react";

// const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);
//   const cacheBuster = new Date().getTime();

//   useEffect(() => {
//     console.log("Fetching data from:", url);

//     // const abortController = new AbortController();
//     // const signal = abortController.signal;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`${url}?cache_buster=${cacheBuster}`, {
//           ...memoizedOptions,
//         });
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       console.log("Cleanup: aborting fetch");
//     };
//   }, [url, memoizedOptions]);

//   return { data, loading, error };
// };

// export default useFetch;

import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
