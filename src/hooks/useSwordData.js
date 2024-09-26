import { useState, useEffect } from "react";
import { fetchSwordData } from "../api/apiClient";

const swordTopics = [
  "Katana",
  "Tachi",
  "Chokuto",
  "Wakizashi",
  "Nodachi",
  "Kodachi",
  "Tantō",
  "Uchigatana",
  "Ninjato",
  "Bokken",
];

export const useSwordData = (shouldFetch) => {
  const [swordData, setSwordData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch) {
        const data = await fetchSwordData(swordTopics);
        setSwordData(data);
      }
    };

    fetchData();
  }, [shouldFetch]);

  return { swordData };
};
