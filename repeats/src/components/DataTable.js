import React, { useState } from 'react';
import { useTable } from 'react-table';
import Detail from './Detail';

const DataTable = ({ columns, data }) => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [selected, setSelected] = useState(true);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const handleRowExpand = (row) => {
        console.log(row)
        setExpandedRow(row.id === expandedRow ? null : row.id);
        setSelected(!selected);
    };


    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    {headerGroups.map((headerGroup, i) => (
                        <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                            <th className="py-2 px-2 border-b border-gray-200 text-left text-sm uppercase">
                            </th>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="py-2 px-4 border-b border-gray-200 text-left text-sm uppercase"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <React.Fragment key={`protein-${row.id}`}>
                                <tr {...row.getRowProps()} className="border-b border-gray-200">
                                    <td
                                        onClick={() => handleRowExpand(row)}
                                        className="py-2 px-2 border-b border-gray-200 text-sm cursor-pointer hover:text-blue-700"
                                    >
                                        +
                                    </td>
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="py-2 px-4 border-b border-gray-200 text-sm"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                                {row.id === expandedRow && (
                                    <tr className='transition ease-out duration-500 '>
                                        <td className='' colSpan={columns.length + 1}>
                                            <Detail />
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;