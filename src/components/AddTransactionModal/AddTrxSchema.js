import * as yup from 'yup';

export const AddTrxSchema = yup.object().shape({
  trx_type: yup.string().required('Required.'),
  trx_date: yup.date().required('Required.'),
  trx_details: yup
    .string()
    .min(4, 'Too short.')
    .max(33, 'Too long.')
    .required('Required.'),
  trx_category: yup.string().required('Required.'),
  trx_amount: yup.number().required('Required.'),
  trx_bank: yup.string().required('Required.'),
});
