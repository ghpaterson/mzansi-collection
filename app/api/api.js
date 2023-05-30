import axios from "axios";

export const fetchMuholiData = async () => {
  try {
    const response = await axios.get(
      "https://api.vam.ac.uk/v2/objects/search?q=zanele%20muholi&min_length=2&max_length=16&images_exist=true&page=1&page_size=15&cluster_size=20&images=true&random=false"
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

export const fetchGoldblattData = async () => {
  try {
    const response = await axios.get(
      "https://api.vam.ac.uk/v2/objects/search?q=goldblatt%2C%20david&min_length=2&max_length=16&images_exist=true&page=1&page_size=15&cluster_size=20&images=true&random=true"
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
