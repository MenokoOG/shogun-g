import { useState, useEffect } from "react";

export const useWikipediaData = (topic) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!topic) return;

    const fetchWikipediaData = async () => {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`;
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData({
          title: result.title,
          extract: result.extract,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load information.");
      } finally {
        setLoading(false);
      }
    };

    fetchWikipediaData(topic);
  }, [topic]);

  return { data, loading, error };
};
