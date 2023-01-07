import { useState, useEffect } from "react";

export default function HitsApiRoute() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("/api/some-data")
            .then((res) => res.json())
            .then((apiData) => setData(apiData.name));
    }, []);

    return (
        <div>
            <h1>Data:</h1>
            <p>{data}</p>
        </div>
    );
}
