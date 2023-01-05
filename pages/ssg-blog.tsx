const tempPosts = [
    {
        title: "The first ssg post",
    },
    {
        title: "The second ssg post",
    },
];

const fetchPosts = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(tempPosts);
        }, 2000);
    });

// This function gets called at build time
export async function getStaticProps() {
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
