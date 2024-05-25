import { useState, useEffect } from 'react';
import axios from 'axios';

const processData = (data) => {
    console.log("[DATA]: >>>>... ", data);
    const tabledataList = [];
    data.forEach(element => {
        tabledataList.push({
            accession: element.metadata.accession,
            name: element.metadata.name,
            go_terms: element.metadata.go_terms ? element.metadata.go_terms.map(item => item.name).join(", ") : "",
        });
    });
    return tabledataList;
}


const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const processed = processData(response.data.results)
                setData(processed);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };

};

export default useFetchData;