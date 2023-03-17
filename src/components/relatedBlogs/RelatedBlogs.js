import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';
import Loading from '../../utils/Loading';
import RelatedBlogsItem from './RelatedBlogsItem';

const RelatedBlogs = ({ currentBlogId, tags }) => {

    const dispatch = useDispatch();
    const { relatedBlogs, isError, error, isLoading } = useSelector((state) => state.relatedBlogs);

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ id: currentBlogId, tags }))
    }, [currentBlogId, dispatch, tags]);


    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && relatedBlogs?.length === 0) content = <div className="col-span-12">No Related videos Found...</div>

    if (!isLoading && !isError && relatedBlogs?.length > 0) {
        content = relatedBlogs.map((blog) => <RelatedBlogsItem key={blog.id} blog={blog} />)
    }

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">


                {content}
            </div>
        </aside>
    );
};

export default RelatedBlogs;