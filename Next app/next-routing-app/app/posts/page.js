'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [post, setPost] = useState([]);

    const fetchPost = (url) => {
        axios.get(url)
            .then(res => {
                setPost(res.data);
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchPost('https://jsonplaceholder.typicode.com/posts');
    }, [])

    return (
        <div className='p-3 grid grid-cols-4 gap-4 bg-white min-h-screen text-black'>
            {post?.map(el => {
                return <div key={el.id} className='border border-gray-400 p-3'>
                    <h3>Title : {el.title}</h3>
                </div>
            })}
        </div>
    )
}

export default page;