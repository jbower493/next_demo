import type { User } from "../../types/types";

const fakeUsers = [
    {
        name: {
            first: "Bobby",
        },
        id: 1,
    },
    {
        name: {
            first: "Kenny",
        },
        id: 2,
    },
];

const req = () =>
    new Promise<{ results: { users: User[] } }>((resolve) => {
        setTimeout(() => resolve({ results: { users: fakeUsers } }));
    });

// This function gets called at build time
export async function getStaticPaths() {
    const data = await req();

    // Get the paths we want to pre-render based on users
    const paths = data.results.users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// getStaticProps now recieves the params returned from getStaticPaths
export async function getStaticProps({ params }: { params: { id: number } }) {
    // Call an external API endpoint to get users
    const res = await fetch(`https://randomuser.me/api/?results=${params.id}`);
    const data: { results: { users: User[] } } = await res.json();

    // By returning { props: { users } }, the Blog component
    // will receive `users` as a prop at build time
    return {
        props: {
            users: data.results,
        },
    };
}

function Blog({ users }: { users: User[] }) {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name.first}</li>
            ))}
        </ul>
    );
}

export default Blog;
