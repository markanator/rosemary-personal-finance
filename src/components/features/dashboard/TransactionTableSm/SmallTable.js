import React, { useMemo } from 'react';
import { usePagination, useSortBy, useTable, useFilters } from 'react-table';
import MOCK_DATA from '../../../../tempData/trxList.json';
import formatMoney from '../../../../utils/formatMoney';
import { COLUMNS } from './SmColumns';

export default function SmallTable() {
  let balance = 0;
  // memoize data to prevent excessive renders
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(
    () =>
      MOCK_DATA.map(trx => {
        balance += trx.trx_amount * 100;
        return {
          ...trx,
          running_bal: formatMoney(balance),
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
    useFilters,
    useSortBy,
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
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`header-${column.Header.toLowerCase()}`}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                        : ''}
                    </span>
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
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