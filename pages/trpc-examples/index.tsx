import { trpc } from "../../utils/trpc";

export default function TrpcExample() {
    const { data, isLoading } = trpc.hello.useQuery({ text: "client" });

    return (
        <div>
            <p>{isLoading ? "Loading..." : data?.greeting}</p>
        </div>
    );
}
