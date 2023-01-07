export default async function ServerExample() {
    // Because the fetch request does not explicitly opt out of cache, Next will SSG this page
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();

    return (
        <div>
            <h1>Server Example</h1>
            {data.results.map(
                (user: { name: { first: string } }, index: number) => (
                    <p key={index}>{user.name.first}</p>
                )
            )}
        </div>
    );
}
