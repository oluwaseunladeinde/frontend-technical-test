import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    { name: 'ACCESSIONS', selector: 'acession', sortable: true },
    { name: 'NAME', selector: 'name' },
    { name: 'GO TERMS', selector: 'go_terms' },
];

const ExpandableDataTable = () => {
    const [data, setData] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.ebi.ac.uk/interpro/api/entry/InterPro/?type=repeat');
            const jsonData = await response.json();
            console.log("expandable table ", jsonData);
            setData(jsonData);
        };
        fetchData();

    }, [])

    const handleRowExpand = (row) => {
        setExpandedRow(row.id === expandedRow ? null : row.id); // Toggle expansion
    };

    const renderRow = (row, { expandableCells }) => (
        <div>
            {/* Display basic row content */}
            <td onClick={() => handleRowExpand(row)}>{row.id}</td>
            <td>{row.name}</td>
            {/* ... render other columns */}
            {expandableCells && row.id === expandedRow && (
                <tr key={`detail-${row.id}`}>
                    <td colSpan={columns.length}>
                        {/* Display detailed information for expanded row */}
                        <p>Details for {row.name}</p>
                        {/* ... render more details */}
                    </td>
                </tr>
            )}
        </div>
    );

    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowExpanded={row => row.id === expandedRow}
            onRowExpandToggle={handleRowExpand}
            customExpandableCellComponent={renderRow}
        />
    );
};

export default ExpandableDataTable;