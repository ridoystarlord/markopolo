import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../Interfaces/Post';

const initialPost = {
    id: 0,
    title: "",
    body: "",
    userId: 1
}

const UpdatePost = () => {
    const { id } = useParams()

    const [updatePost, setUpdatePost] = useState<Post>(initialPost)
    const [showError, setShowError] = useState<boolean>(false)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const handleUpdatePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("")
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatePost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setShowError(false)
                setShowSuccess(true)
                setMessage("Updated Successfully")
                setUpdatePost(json)
            })
            .catch((err) => {
                setShowSuccess(false)
                setShowError(true)
                setMessage("Failed")
            })
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setUpdatePost(json)
            });
    }, [])

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
                <form onSubmit={handleUpdatePost}>
                    <label>Post Title:</label><br />
                    <input value={updatePost?.title} type="text" onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })} placeholder='Enter Post Title' /><br />
                    <label>Post Description:</label><br />
                    <textarea value={updatePost?.body} onChange={(e) => setUpdatePost({ ...updatePost, body: e.target.value })} rows={4} cols={50} placeholder='Enter Post Description'></textarea>
                    <br /><br />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;