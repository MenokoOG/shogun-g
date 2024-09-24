import { useState, useEffect } from "react";

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
    const fetchSwordData = async () => {
      try {
        const responses = await Promise.all(
          swordTopics.map((topic) =>
            fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`)
          )
        );

        const data = await Promise.all(responses.map((res) => res.json()));

        const combinedData = data.map((sword) => ({
          title: sword.title,
          extract: sword.extract,
        }));

        setSwordData(combinedData);
      } catch (error) {
        console.error("Error fetching sword data:", error);
        setSwordData([]); // Set to empty array in case of an error
      }
    };

    if (shouldFetch) {
      fetchSwordData();
    }
  }, [shouldFetch]);

  return { swordData };
};
