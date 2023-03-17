import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BlogDetails from '../../components/blogDetail/BlogDetails';
import RelatedBlogs from '../../components/relatedBlogs/RelatedBlogs';
import { fetchBlog } from '../../features/blog/blogSlice';
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
            {/* <div className="container mt-8">
                <Link to="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div> */}
            {content}

        </div>
    );
};

export default Blog;