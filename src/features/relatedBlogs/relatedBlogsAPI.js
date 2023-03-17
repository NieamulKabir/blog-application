import axios from "../../utils/axios"

export const getRelatedBlogs = async (id,tags) => {
    let query = tags
    .map((tag)=>`tags_like=${tag}`)
    .concat([`id_ne=${id}`])
    .join('&')
    

    const response = await axios.get(`/blogs?${query}`);

    return response.data;
};
