/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import AddTransactionModal from '../../../components/AddTransactionModal';
import formatMoney from '../../../utils/formatMoney';
import { COLUMNS } from './sm-columns';
import AddBankAccountModal from '../../../components/AddBankAccountModal/AddBackAccountModal';
// import dayjs from 'dayjs';

export default function SmallTable({ userTransactions }) {
  console.log(userTransactions);

  const [open, setOpen] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  let balance = 10000; // start with $100

  // memoize data to prevent excessive renders
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(
    () =>
      userTransactions.map((trx) => {
        balance += trx.trx_amount;

        // console.log(dayjs(trx.trx_date.second).format('MM/DD/YYYY'));

        return {
          ...trx,
          running_bal: formatMoney(balance),
          // trx_date: dayjs(trx.trx_date.seconds).format('MM/DD/YYYY'),
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

  const OpenAddBankModal = () => {
    setBankOpen(true);
  };

  const CloseAddBankModal = () => {
    setBankOpen(false);
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
          <button className="btn-primary" onClick={OpenAddBankModal}>
            Add Bank account
          </button>
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
      <AddBankAccountModal handleClose={CloseAddBankModal} open={bankOpen} />
      <AddTransactionModal handleClose={CloseAddTrxModal} open={open} />
    </div>
  );
}
