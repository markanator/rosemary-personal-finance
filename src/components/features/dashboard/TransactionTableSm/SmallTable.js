/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import MOCK_DATA from '../../../../tempData/trxList.json';
import formatMoney from '../../../../utils/formatMoney';
import AddTransactionModal from '../../shared/AddTransactionModal/AddTransactionModal';
import { COLUMNS } from './SmColumns';

export default function SmallTable() {
  const [open, setOpen] = useState(false);
  let balance = 0;

  // memoize data to prevent excessive renders
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(
    () =>
      MOCK_DATA.map((trx) => {
        // eslint-disable-next-line
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
      initialState: {
        sortBy: [{ id: 'trx_date', desc: true }],
        pageIndex: 0,
        pageSize: 5,
      },
    },
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

  const OpenAddTrxModal = () => {
    setOpen(true);
  };

  const CloseAddTrxModal = () => {
    setOpen(false);
  };

  return (
    <div className="trx__component">
      <div className="trx__adjust">
        <div className="--left">
          {/* <b>Filter By:</b> */}
          {/* Sticking with sorting for now! */}
        </div>
        <div className="--right">
          {/*
          // TODO:: ADD MODAL TO add a transaction
          */}
          <button className="btn-primary" onClick={OpenAddTrxModal}>
            Add Transaction
          </button>
        </div>
      </div>
      <div className="--trxwrapper">
        <table className="trx__table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
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
      <AddTransactionModal handleClose={CloseAddTrxModal} open={open} />
    </div>
  );
}
