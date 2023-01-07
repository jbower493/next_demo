import { useEffect, useState } from "react";

function Blog() {
    const [users, setUsers] = useState<{ name: { first: string } }[]>([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((res) => res.json())
            .then((data: { results: { name: { first: string } }[] }) =>
                setUsers(data.results)
            );
    }, []);

    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name.first}</li>
            ))}
        </ul>
    );
}

export default Blog;
