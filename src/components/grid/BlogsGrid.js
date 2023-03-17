import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Loading from '../../utils/Loading';
import BlogsGridItem from './BlogsGridItem';

const BlogsGrid = () => {

    const dispatch = useDispatch();
    const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch]);


    let content;

    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && blogs?.length === 0) content = <div className="col-span-12">No video Found...</div>

    if (!isLoading && !isError && blogs?.length > 0) {
        content =
            blogs.map(blog => (<BlogsGridItem key={blog.id} blog={blog} />))

    }



    return (
        <main className="post-container" id="lws-postContainer">

            {content}

        </main>
    );
};

export default BlogsGrid;