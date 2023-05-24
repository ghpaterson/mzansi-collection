import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.vam.ac.uk/v2/objects/search?q_object_type=chair&min_length=2&max_length=16&images_exist=true&year_made_from=1940&year_made_to=1960&order_by=location&page=1&page_size=15&cluster_size=1&images=true&random=true"
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
