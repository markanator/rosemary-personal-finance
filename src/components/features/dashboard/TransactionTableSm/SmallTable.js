import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from '../../../../tempData/trxList.json';
import formatMoney from '../../../../utils/formatMoney';
import { COLUMNS } from './SmColumns';

export default function SmallTable() {
  const balance = 100_00;
  // memoize data to prevent excessive renders
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(
    () =>
      MOCK_DATA.map(trx => {
        let amount = trx.trx_amount * 10;
        return {
          ...trx,
          trx_date: dayjs(trx.trx_date).format('MM/DD/YY'),
          trx_details: `${trx.trx_details.slice(0, 57)}...`,
          trx_amount: formatMoney(amount),
          running_bal: formatMoney(balance - amount),
        };
      }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
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
                  <th
                    {...column.getHeaderProps()}
                    className={`header-${column.Header.toLowerCase()}`}
                  >
                    {/* {console.log('COL', column)} */}
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
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
      <div className="--paginate">
        <button
          className="trx__btn"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </button>
        {pageOptions.map((page, idx) => (
          <button
            className={`trx__btn ${pageIndex === idx ? 'active' : ''}`}
            key={page}
            onClick={() => gotoPage(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="trx__btn"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>{' '}
      </div>
    </div>
  );
}
