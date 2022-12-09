import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getYoga() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.payload);
    }
    getYoga();
  }, [url]);

  return [data];
}

export default useFetch;
