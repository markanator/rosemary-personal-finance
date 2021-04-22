import * as yup from 'yup';

export const AddTrxSchema = yup.object().shape({
  trxType: yup.string().required('Required.'),
  trxDate: yup.date().required('Required.'),
  trxDetails: yup
    .string()
    .min(4, 'Too short.')
    .max(33, 'Too long.')
    .required('Required.'),
  trxCategory: yup.string().required('Required.'),
  trxAmount: yup.number().required('Required.'),
  trxBank: yup.string().required('Required.'),
});
