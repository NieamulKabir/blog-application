import { getBlog, getUpdateBlog } from "./blogAPI";



const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const updateBlog = createAsyncThunk("blog/updateBlog", async ({ id, updates }) => {
    const updateBlog = await getUpdateBlog(id, updates)
    return updateBlog;
})

const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            });

        builder.addCase(updateBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
        });
    },
});

export default blogSlice.reducer;
