"use client";
import { useState, useEffect } from "react";

type User = { name: { first: string } };

async function fetchMoreUsers() {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = (await res.json()) as { results: User[] };

    return data.results;
}

export default function EditableUsers({
    initialUsers,
}: {
    initialUsers: User[];
}) {
    // Props are passed on the server, and are used as initial state, then users can still be interacted with on the client
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState("");

    // note this happens twice because of the react strict mode thing
    useEffect(() => {
        fetchMoreUsers().then((newUsers) =>
            setUsers((cur) => [...cur, ...newUsers])
        );
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <p key={index}>{user.name.first}</p>
            ))}
            <input
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
            />
            <button
                onClick={() =>
                    setUsers([...users, { name: { first: newUser } }])
                }
            >
                Add User
            </button>
        </div>
    );
}
