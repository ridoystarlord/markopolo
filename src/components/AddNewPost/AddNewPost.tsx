import React, { useState } from 'react';
import "../../sass/AddNewPost.scss"
import { Post } from '../Interfaces/Post';

const initialPost = {
    id: 0,
    title: "",
    body: "",
    userId: 1
}

const AddNewPost = () => {

    const [newPost, setNewPost] = useState<Post>(initialPost)
    const [showError, setShowError] = useState<boolean>(false)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")


    const handleAddNewPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("")
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setShowError(false)
                setShowSuccess(true)
                setMessage("Successfully Created")
                setNewPost(initialPost)
            })
            .catch((error) => {

                setShowSuccess(false)
                setShowError(true)
                setMessage("Failed")
            })
    }

    return (
        <div className='add-new-post-container'>
            {
                showError && <div className="error-alert">
                    <span className="closebtn" onClick={() => {
                        setShowError(false)
                        setMessage("")
                    }}>&times;</span>
                    {message}
                </div>
            }
            {
                showSuccess && <div className="success-alert">
                    <span className="closebtn" onClick={() => {
                        setShowSuccess(false)
                        setMessage("")
                    }}>&times;</span>
                    {message}
                </div>
            }
            <div className='add-new-post-form'>
                <form onSubmit={handleAddNewPost}>
                    <label>Post Title:</label><br />
                    <input value={newPost.title} type="text" onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} placeholder='Enter Post Title' /><br />
                    <label>Post Description:</label><br />
                    <textarea value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} rows={4} cols={50} placeholder='Enter Post Description'></textarea>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewPost;