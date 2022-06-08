import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostContainer from './components/PostContainer/PostContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPost from './components/AddNewPost/AddNewPost';
import UpdatePost from './components/UpdatePost/UpdatePost';
import DeletePost from './components/DeletePost/DeletePost';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostContainer />} />
          <Route path="/add-new" element={<AddNewPost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/delete" element={<DeletePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
