import React, { useEffect, useState, useMemo } from 'react';
import ChartComponent from './components/Charts';
import { processData } from './utils/processData';

import DataTable from './components/DataTable';
import useFetchData from './hooks/useFetchData';

function App() {
  const [aggregatedData, setAggregatedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data, loading: dataLoading, error: dataError } = useFetchData('https://www.ebi.ac.uk/interpro/api/entry/InterPro/?type=repeat');
  console.log({ data });
  const columns = useMemo(() => [
    {
      Header: 'ACCESSION',
      accessor: 'accession',
    },
    {
      Header: 'NAME',
      accessor: 'name',
    },
    {
      Header: 'GO TERMS',
      accessor: 'go_terms',
    },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.ebi.ac.uk/interpro/api/entry/InterPro/?type=repeat');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const aggregatedData = processData(data);
        setAggregatedData(aggregatedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  if (dataError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Frontend Technical Test</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chart aggregation</p>
          <p className="mt-4 text-lg leading-8 text-gray-600">Aggregate the information of the InterPro repeat entries into a chart that shows how many signatures each member database contributes to repeat entries.</p>
          <div className="mt-2 text-base leading-7 text-gray-600">
            <ChartComponent data={aggregatedData} />
          </div>
          <div className='mt-10' />
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Data Table</p>
          <p className="mt-4 text-lg leading-8 text-gray-600">Create a data table that displays information for all the repeat entries</p>
          <div class="mt-2 text-base leading-7 text-gray-600">
            <DataTable columns={columns} data={data} className="shadow-lg rounded-lg" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
