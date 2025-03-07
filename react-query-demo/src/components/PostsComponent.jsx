import React from 'react';
import { useQuery } from "@tanstack/react-query";


const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!Response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
};

const postsComponent = () => {
    const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
        cacheTime: 1000 * 60 * 5,  
        staleTime: 1000 * 60,      
        refetchOnWindowFocus: false,  
        keepPreviousData: true,  
      });

    if (isLoading) return <p>loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}>Refetch</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default postsComponent;