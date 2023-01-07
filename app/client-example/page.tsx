"use client";

import { useState, useEffect } from "react";

function ClientExample() {
    const [mate, setMate] = useState("Waiting for a mate...");

    useEffect(() => {
        fetch("/api/some-data")
            .then((res) => res.json())
            .then((apiData) => setMate(apiData.name));
    }, []);

    return (
        <div>
            <h1>Client Example</h1>
            <p>{mate}</p>
        </div>
    );
}

export default ClientExample;
