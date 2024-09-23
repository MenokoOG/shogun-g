import { useState, useEffect } from "react";

const swordTopics = [
  "Katana",
  "Tachi",
  "Chokuto",
  "Wakizashi",
  "Nodachi",
  "Kodachi",
  "Tantō ",
  "Uchigatana",
  "Ninjato",
  "Bokken",
];

export const useSwordData = (shouldFetch) => {
  const [swordData, setSwordData] = useState(null);

  useEffect(() => {
    const fetchSwordData = async () => {
      let combinedData = [];
      for (const topic of swordTopics) {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`
        );
        const swordData = await response.json();
        combinedData.push({
          title: swordData.title,
          extract: swordData.extract,
        });
      }
      setSwordData(combinedData);
    };

    if (shouldFetch) {
      fetchSwordData();
    }
  }, [shouldFetch]);

  return { swordData };
};
