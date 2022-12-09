import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.payload);
    }
    fetchData();
  }, [url]);

  return [data];
}

// Look into react query ^^
// All this code in one line

export default useFetch;
