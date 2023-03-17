import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Loading from '../../utils/Loading';
import BlogsGridItem from './BlogsGridItem';

const BlogsGrid = () => {

    const dispatch = useDispatch();
    const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

    const { sortParam, filterParam } = useSelector((state) => state.filter);

    const sortBlogs = (a, b) => {
        switch (sortParam) {
          case "most_liked":
            return b.likes - a.likes;
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return 0;
        }
      };
    
    const filterBlogs = (blog) => {
        return filterParam === "saved" ? blog.isSaved : blog;
      };
  
     


    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch]);


    let content;

    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && blogs?.length === 0) content = <div className="col-span-12">No video Found...</div>

    if (!isLoading && !isError && blogs?.length > 0) {
        content =
            blogs
            .filter(filterBlogs)
            .sort(sortBlogs)
            .map(blog => (<BlogsGridItem key={blog.id} blog={blog} />))

    }



    return (
        <main className="post-container" id="lws-postContainer">

            {content}

        </main>
    );
};

export default BlogsGrid;