import axios from "axios";
import { useEffect, useState } from "react";

export function useGet(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    async function getData() {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get(url);
        // const theState = fnAdapter(result.data);
        if (isSubscribed) setData(result.data);
      } catch (error: any) {
        if (isSubscribed) {
          setError(error?.message);
          setData([]);
        }
      } finally {
        if (isSubscribed) setLoading(false);
      }
    }
    getData();
    return () => {
      isSubscribed = false;
    };
  }, [url]);

  return { data, loading, error };
}
