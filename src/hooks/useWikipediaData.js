import { useState, useEffect } from "react";

export const useWikipediaData = (topic) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!topic) return;

    const fetchWikipediaData = async (topic) => {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData({
          title: data.title,
          extract: data.extract,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load information.");
        setLoading(false);
      }
    };

    fetchWikipediaData(topic);
  }, [topic]);

  return { data, loading, error };
};
