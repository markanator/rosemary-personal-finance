import React, { useMemo } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import MOCK_DATA from '../../../../tempData/trxList.json';
import formatMoney from '../../../../utils/formatMoney';
import { MainTableColumns } from './tableColumns';
import './mainTrxTable.scss';

export default function FullTable() {
  let balance = 0;
  const columns = useMemo(() => MainTableColumns, []);

  const data = useMemo(
    () =>
      MOCK_DATA.map(trx => {
        // eslint-disable-next-line
        balance += trx.trx_amount * 100;
        return {
          ...trx,
          running_bal: formatMoney(balance),
        };
      }),
    []
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
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [{ id: 'trx_date', desc: true }],
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="trxtable__wrapper">
        <div className="trxtable__header">
          <button className="btn-primary">Add Transaction</button>
        </div>
        <table className="trx__table" {...getTableProps()}>
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
        <div className="--paginate">
          <button
            className="btn-primary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Prev
          </button>
          {pageOptions.map((page, idx) => (
            <button
              className={`btn-primary ${pageIndex === idx ? 'active' : ''}`}
              key={page}
              onClick={() => gotoPage(idx)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className="btn-primary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>{' '}
        </div>
      </div>
    </>
  );
}
