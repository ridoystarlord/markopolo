import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/PostContainer.scss';
import { Post } from '../Interfaces/Post';

const PostContainer = () => {

    const [allPost, setAllPost] = useState<Post[]>([])
    const [searchPost, setSearchPost] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchPost === "") {
            getAllPost()
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchPost}`)
                .then((response) => response.json())
                .then((json) => setAllPost(json));
        }

    }

    const getAllPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setAllPost(json));
    }

    useEffect(() => {
        getAllPost()
    }, [])

    return (
        <div>
            <div className='search-container'>
                <form onSubmit={handleSubmit}>
                    <input type="text" id='gsearch' placeholder='Search By Post Title' onChange={(e) => setSearchPost(e.target.value)} />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div className="post-container">
                {
                    allPost.map((post: Post, index) =>
                        <div className="post" key={index}>
                            <h2>{post?.title}</h2>
                            <p>
                                {post?.body}
                            </p>
                            <Link className='post-link' to={`/update/${post.id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PostContainer;