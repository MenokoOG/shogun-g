export const fetchWikipediaData = async (topic) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      title: data.title,
      extract: data.extract,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      title: "Error",
      extract: "Failed to load information.",
    };
  }
};
