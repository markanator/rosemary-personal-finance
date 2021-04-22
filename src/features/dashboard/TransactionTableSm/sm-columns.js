import dayjs from 'dayjs';
import formatMoney from '../../../utils/formatMoney';
import ColumnFilter from './column-filter';

export const COLUMNS = [
  {
    Header: 'Type',
    accessor: 'trx_type',
    Filter: ColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Date',
    accessor: 'trx_date',
    Cell: ({ value }) => dayjs(value).format('MM/DD/YY').toString(),
    disableFilters: true,
  },
  {
    Header: 'Details',
    accessor: 'trx_details',
    Cell: ({ value }) => `${value.slice(0, 57)}...`,
    disableFilters: true,
  },
  {
    Header: 'Category',
    accessor: 'trx_category',
    Filter: ColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Amount',
    accessor: 'trx_amount',
    Cell: ({ value }) => {
      return formatMoney(value);
    },
    disableFilters: true,
  },
  {
    Header: 'Balance',
    accessor: 'running_bal',
    disableFilters: true,
  },
  // {
  //   Header: '_',
  //   accessor: '_id',
  // },
];
