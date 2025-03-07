import { useQuery } from "@tanstack/react-query";


const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const postsComponent = () => {
    const {data, error, isLoading, refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });

    if (isLoading) return <p>loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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