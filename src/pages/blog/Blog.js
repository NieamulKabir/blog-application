import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetails from '../../components/blogDetail/BlogDetails';
import RelatedBlogs from '../../components/relatedBlogs/RelatedBlogs';
import { fetchBlog } from '../../features/blog/blogSlice';
import GoHome from '../../utils/GoHome';
import Loading from '../../utils/Loading';

const Blog = () => {

    const dispatch = useDispatch();
    const { blog, isLoading, isError, error } = useSelector((state) => state.blog);

    const { blogId } = useParams()

    useEffect(() => {
        dispatch(fetchBlog(blogId))
    }, [blogId, dispatch])

    const { id,tags } = blog || {}

    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !blog?.id) content = <div className="col-span-12">No video Found...</div>

    if (!isLoading && !isError && blog?.id) {
        content =
            <section className="post-page-container">

                <BlogDetails blog={blog} />

                <RelatedBlogs currentBlogId={id} tags={tags} />
            </section>
    }

    return (
        <div>
           <GoHome></GoHome>
            {content}

        </div>
    );
};

export default Blog;