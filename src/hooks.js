import { useState, useEffect } from "react";
import axios from "axios";

export const useRemoteService = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchBooks = async () => {
        setError(false);
        setLoading(true);
  
        try {
          const res = await axios.get(url);
          setData(res.data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false)
        }
      };
  
      fetchBooks();
    }, [url]);

    return { data, loading, error , setUrl};
}