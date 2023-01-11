import type { User } from "../types/types";
import { useState } from "react";

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

// Props are fetched on the server by getServerSideProps
function Blog({ users: initialUsers }: { users: User[] }) {
    // server side props are used as initial state, then users can still be interacted with on the client
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState("");

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name.first}</li>
                ))}
            </ul>
            <input
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
            />
            <button
                onClick={() =>
                    setUsers([
                        ...users,
                        {
                            id: users[users.length - 1].id + 1,
                            name: { first: newUser },
                        },
                    ])
                }
            >
                Add User
            </button>
        </div>
    );
}

export default Blog;
