import { useState, useEffect } from "react";
import { fetchWikipediaData } from "../api/apiClient";

export const useWikipediaData = (topic) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!topic) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchWikipediaData(topic);
        setData({ title: result.title, extract: result.extract });
      } catch (error) {
        setError("Failed to load information.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic]);

  return { data, loading, error };
};
