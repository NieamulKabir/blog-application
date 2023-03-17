
import axios from "../../utils/axios"

export const getBlogs = async () => {
    // let queryString = "";
    // if (tags?.length > 0) {
    //     queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    // }
    // if (search !== '') {
    //     queryString += `&q=${search}`
    // }
    const response = await axios.get(`/blogs`);

    return response.data;
};
