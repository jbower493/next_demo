import { trpc } from "../../utils/trpc";

export default function TrpcExample() {
    const { data, isLoading } = trpc.getAllUsers.useQuery();

    if (isLoading || !data) return <div>Loading...</div>;

    return (
        <div>
            {data.map((user, index) => (
                <p key={index}>{user.name}</p>
            ))}
        </div>
    );
}
