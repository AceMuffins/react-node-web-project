import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import NotFound from './NotFound';
import Projects from './Projects';
import axios from 'axios';

const GetPosts = ({ data }) => {
    return(
        <>
            {data.map(jsonObject => {
                return(
                    <Post contents={jsonObject} />
                );
            })}
        </>
    );
}

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error retrieving data from the API:', error);
            });
    }, []);

    return(
        <Router>
            <Header />
            <div className='body'>
                <Routes>
                    <Route path="/" element={<GetPosts data={posts} />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;