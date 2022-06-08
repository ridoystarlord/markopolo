import React, { useState } from 'react';

const DeletePost = () => {
    const [deletePostID,setDeletePostID]=useState(0)
    const [showError,setShowError]=useState(false)
    const [showSuccess,setShowSuccess]=useState(false)
    const [message,setMessage]=useState("")

    const handleDeletePost=(e)=>{
        e.preventDefault();
        if (deletePostID<=0) {
            setShowSuccess(false)
            setShowError(true)
            setMessage("Post ID Can't Be Less than or Equals to ZERO")
            return
        }
        setMessage("")
        fetch(`https://jsonplaceholder.typicode.com/posts/${deletePostID}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setShowError(false)
                setShowSuccess(true)
                setMessage("Deleted Successfully")
                setDeletePostID(0)
            })
            .catch((error)=>{
                
                setShowSuccess(false)
                setShowError(true)
                setMessage("Failed")
            })
    }

    return (
        <div className='add-new-post-container'>
            {
                showError && <div class="error-alert">
                <span class="closebtn" onClick={()=>{
                    setShowError(false)
                    setMessage("")
                }}>&times;</span> 
                {message}
            </div>
            }
            {
                showSuccess && <div class="success-alert">
                <span class="closebtn" onClick={()=>{
                    setShowSuccess(false)
                    setMessage("")
                }}>&times;</span> 
                {message}
            </div>
            }
            <div className='add-new-post-form'>
                <form onSubmit={handleDeletePost}>
                    <label for="fname">Enter Post ID:</label><br/>
                    <input value={deletePostID} type="number" onChange={(e)=>setDeletePostID(parseInt(e.target.value))} placeholder='Enter Post ID'/><br/>
                    <br/><br/>
                    <input type="submit" value="Delete"/>
                </form> 
            </div>
        </div>
    );
};

export default DeletePost;