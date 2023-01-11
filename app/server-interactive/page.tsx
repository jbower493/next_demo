import EditableUsers from "./EditableUsers";

export default async function ServerExample() {
    // By setting the "cache" option to "no-store" on the fetch request, this makes Next SSR the component
    const res = await fetch("https://randomuser.me/api/?results=5", {
        cache: "no-store",
    });
    const data = await res.json();

    return (
        <div>
            <h1>App / Server Interactive</h1>
            <EditableUsers initialUsers={data.results} />
        </div>
    );
}
