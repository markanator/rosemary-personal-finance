import dayjs from 'dayjs';
import formatMoney from '../../../utils/formatMoney';

export const MainTableColumns = [
  {
    Header: 'Type',
    accessor: 'trx_type',
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
    Cell: ({ value }) => `${value.slice(0, 37)}...`,
    disableFilters: true,
  },
  {
    Header: 'Category',
    accessor: 'trx_category',
  },
  {
    Header: 'Amount',
    accessor: 'trx_amount',
    Cell: ({ value }) => {
      return formatMoney(value * 100);
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
