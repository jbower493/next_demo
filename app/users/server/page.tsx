import getAllUsers from "../../../backend/users/getAll";

async function Users() {
    // To get data in a server component, just call the BE logic directly
    const users = await getAllUsers();

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
