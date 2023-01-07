export default async function ServerExample() {
    // By setting the "cache" option to "no-store" on the fetch request, this makes Next SSR the component
    const res = await fetch("https://randomuser.me/api/?results=5", {
        cache: "no-store",
    });
    const data = await res.json();

    return (
        <div>
            <h1>Server Example No Cache</h1>
            {data.results.map(
                (user: { name: { first: string } }, index: number) => (
                    <p key={index}>{user.name.first}</p>
                )
            )}
        </div>
    );
}
