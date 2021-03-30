import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../../../tempData/trxList.json';
import { COLUMNS } from './SmColumns';

export default function SmallTable() {
  // memoize data to prevent excessive renders
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="trx__component">
      <div className="trx__adjust">
        <div className="--left">
          <b>Filter By:</b>
        </div>
        <div className="--right">right</div>
      </div>
      <div className="--trxwrapper">
        <table className="dashtrxtable" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="--paginate">pagination</div>
    </div>
  );
}
