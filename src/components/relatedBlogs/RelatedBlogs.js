import React from 'react';
import RelatedBlogsItem from './RelatedBlogsItem';

const RelatedBlogs = () => {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <RelatedBlogsItem />
        </aside>
    );
};

export default RelatedBlogs;