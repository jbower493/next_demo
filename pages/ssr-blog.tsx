import type { User } from "../types/types";

// This gets called on every request
export async function getServerSideProps() {
    // Call an external API endpoint to get users
    const res = await fetch("https://randomuser.me/api/?results=5");
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
