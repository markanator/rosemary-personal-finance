import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddTrxSchema = yup.object().shape({
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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '775px',
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(2, 4, 3),
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
  input: {
    width: '300px',
  },
  formControls: {
    marginBottom: '1.5rem',
  },
  grid: {
    padding: '2rem',
  },
  headergrid: {
    marginBottom: '1rem',
  },
  footerGrid: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100%',
    marginTop: '1rem',
    justifyContent: 'space-evenly',
  },
}));

export default function AddTransactionModal({ handleClose, open }) {
  const classes = useStyles();
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddTrxSchema),
  });
  const watchTrxType = watch('trxType');

  const onSubmit = (data) => {
    //! ADD CONTEXT/API STUFF HERE
    alert(JSON.stringify(data, null, 2));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Paper className={classes.paper} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} className={classes.headergrid}>
              <Typography variant="h4">Add Transaction</Typography>
              <Typography variant="p">
                Add a new transaction to your transaction history
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* TRANSACTION TYPE */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trxType">Transaction Type</InputLabel>
                <Controller
                  name="trxType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select native {...field} className={classes.input}>
                      <option aria-label="None" value="" />
                      <option value="Withdrawal">Withdrawal</option>
                      <option value="Deposit">Deposit</option>
                    </Select>
                  )}
                />
                <FormHelperText error={!!errors?.trxType?.message}>
                  {errors.trxType && errors.trxType.message}
                </FormHelperText>
              </FormControl>
              {/* TRANSACTION DATE */}
              <FormControl className={classes.formControls}>
                <Controller
                  name="trxDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.input}
                      type="datetime-local"
                      label="Transaction Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
                <FormHelperText error={!!errors?.trxDate?.message}>
                  {errors.trxDate && 'Incorrect Format.'}
                </FormHelperText>
              </FormControl>
              {/* TEXT AREA */}
              <FormControl className={classes.formControls}>
                <Controller
                  name="trxDetails"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="textarea"
                      className={classes.input}
                      label="Transaction Details"
                      variant="outlined"
                      multiline
                      rows={3}
                      rowsMax={3}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
                <FormHelperText error={!!errors?.trxDetails?.message}>
                  {errors.trxDetails && errors.trxDetails.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              {/* TRX CATEGORY */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trxCategory">
                  Transaction Category
                </InputLabel>
                <Controller
                  name="trxCategory"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select native {...field} className={classes.input}>
                      <option aria-label="None" value="" />
                      {/* Conditionally render based on trx type */}
                      {watchTrxType && watchTrxType !== 'Withdrawal' ? (
                        <>
                          <option value="Income">Income</option>
                          <option value="Other">Other</option>
                        </>
                      ) : null}
                      {/* Conditionally render based on trx type */}
                      {watchTrxType && watchTrxType !== 'Deposit' ? (
                        <>
                          <option value="Bills">Bills</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Debt">Debt</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Food">Food</option>
                          <option value="Other">Other</option>
                        </>
                      ) : null}
                    </Select>
                  )}
                />
                <FormHelperText error={!!errors?.trxCategory?.message}>
                  {errors.trxCategory && errors.trxCategory.message}
                </FormHelperText>
              </FormControl>
              {/* TRX AMOUNT */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trxAmount">Transaction Amount</InputLabel>
                <Controller
                  name="trxAmount"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      className={classes.input}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  )}
                />
                <FormHelperText error={!!errors?.trxAmount?.message}>
                  {errors.trxAmount && 'Required.'}
                </FormHelperText>
              </FormControl>
              {/* LINKED ACCOUNT */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trxBank">Linked Account</InputLabel>
                <Controller
                  name="trxBank"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select native {...field} className={classes.input}>
                      <option aria-label="None" value="" />
                      <option value="Bank of America">Bank of America</option>
                    </Select>
                  )}
                />
                <FormHelperText error={!!errors?.trxBank?.message}>
                  {errors.trxBank && 'Required.'}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.footerGrid}>
              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
