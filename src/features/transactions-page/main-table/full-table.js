/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import AddTransactionModal from '../../../components/AddTransactionModal';
import formatMoney from '../../../utils/formatMoney';
import './mainTrxTable.scss';
import { MainTableColumns } from './table-columns';

export default function FullTable({ transactions, banks }) {
  const [open, setOpen] = useState(false);
  let balance =
    banks.length > 0
      ? banks.map((acc) => acc.acctAmount).reduce((acc, cv) => acc + cv)
      : 0;
  // let balance = 0;
  const columns = useMemo(() => MainTableColumns, []);

  const data = useMemo(
    () =>
      transactions.map((trx) => {
        balance += trx.trx_amount;
        return {
          ...trx,
          running_bal: formatMoney(balance),
        };
      }),
    [transactions]
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

  const OpenAddTrxModal = () => {
    setOpen(true);
  };

  const CloseAddTrxModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="trxtable__wrapper">
        <div className="trxtable__header">
          <button className="btn-primary" onClick={OpenAddTrxModal}>
            Add Transaction
          </button>
        </div>
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
    </>
  );
}
