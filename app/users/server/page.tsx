import getAllUsers from "../../../backend/users/getAll";

async function Users() {
    // To get data in a server component, just call the BE logic directly
    // There is no point calling Next api endpoint here because it is just an unnecessary api call
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
