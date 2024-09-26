export const fetchSwordData = async (topics) => {
  try {
    const responses = await Promise.all(
      topics.map((topic) =>
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`)
      )
    );

    const data = await Promise.all(responses.map((res) => res.json()));

    return data.map((sword) => ({
      title: sword.title,
      extract: sword.extract,
    }));
  } catch (error) {
    console.error("Error fetching sword data:", error);
    return []; // Return empty array in case of error
  }
};

export const fetchWikipediaData = async (topic) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to load information.");
  }
};
