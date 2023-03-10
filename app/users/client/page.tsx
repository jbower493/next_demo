"use client";
import { useState, useEffect } from "react";
import { user } from "@prisma/client";

function Users() {
    const [users, setUsers] = useState<user[]>([]);

    // To get data in a client component, you cant call BE logic, so create an API route containing the BE logic, and then call the api route from the client~
    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((data: { users: user[] }) => setUsers(data.users));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user, index) => (
                <p key={index}>{user.name}</p>
            ))}
        </div>
    );
}

export default Users;
