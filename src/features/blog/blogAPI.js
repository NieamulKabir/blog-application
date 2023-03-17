import axios from "../../utils/axios";

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
};

export const getUpdateBlog = async (id, updates) => {
    const response = await axios.patch(`/blogs/${id}`, { ...updates });
    const updatedBlog = await response?.data;

    return updatedBlog;
};

