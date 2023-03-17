import React from 'react';
import { useDispatch } from 'react-redux';
import {  updateBlog } from '../../features/blog/blogSlice';

const BlogDetails = ({ blog }) => {
    const dispatch = useDispatch()
    const { id, image, title, tags, likes, isSaved, description } = blog;

    const handleLike = () => {
        dispatch(updateBlog({ id, updates: { likes: likes + 1 } }))
    }
    const handleSave = () => {
        dispatch(updateBlog({ id, updates: { isSaved: !isSaved } }));
      };
    return (
        <main className="post">

            <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {
                        tags.map(tag => (
                            <span key={tag}>#{tag}</span>
                        ))
                    }

                </div>
                <div className="btn-group">

                    <button
                        className="like-btn" id="lws-singleLinks"
                        onClick={handleLike}
                    >
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>



                    <button
                        onClick={handleSave}
                        id="lws-singleSavedBtn"
                        className={`save-btn ${isSaved && "active"}`}
                    >
                        <i className="fa-regular fa-bookmark" /> Saved
                    </button>


                    {/* <button className="active save-btn" id="lws-singleSavedBtn">
                        {
                            isSaved && (
                                <div className="flex gap-2 mt-4">
                                    <span className="lws-badge"> Saved </span>
                                </div>
                            )
                        }
                    </button> */}
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;