const tempPosts = [
    {
        title: "The first ssr post",
    },
    {
        title: "The second ssr post",
    },
];

const fetchPosts = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(tempPosts);
        }, 2000);
    });

// This gets called on every request
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const posts = await fetchPosts();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    };
}

function Blog({ posts = tempPosts }: { posts: { title: string }[] }) {
    return (
        <ul>
            {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    );
}

export default Blog;
