import { useState, useEffect } from 'react';

export function useFetch(url: any) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {

            const req = await fetch(url);
            const jsonData = await req.json();
            setData(jsonData);

        };
        fetchData();

    }, [url]);

    return data;
}

