import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AddTrxSchema } from './AddTrxSchema';
import { useAddTrxStyles } from './muiFormStyle';
import { db, firebase } from '../../data/firebase';
import useAppContext from '../../hooks/AppContext';
import uid from '../../utils/uid';

export default function AddTransactionModal({ handleClose, open }) {
  const classes = useAddTrxStyles();

  const { user } = useAppContext();

  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddTrxSchema),
  });
  const watchTrxType = watch('trx_type');

  const onSubmit = async (data) => {
    const trx_id = uid(); // <- this uid is not real uid. don't confused!
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .update({
          transactions: firebase.firestore.FieldValue.arrayUnion({
            ...data,
            trx_id,
          }),
        });
      console.log(
        `Successfully added new transaction to a user document::`,
        trx_id
      );
    } catch (err) {
      console.error(err);
    }

    handleClose();
    reset();
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
                <InputLabel htmlFor="trx_type">Transaction Type</InputLabel>
                <Controller
                  name="trx_type"
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

                <FormHelperText error={!!errors?.trx_type?.message}>
                  {errors.trx_type && errors.trx_type.message}
                </FormHelperText>
              </FormControl>
              {/* TRANSACTION DATE */}
              <FormControl className={classes.formControls}>
                {' '}
                {/* This one parent of a input section*/}
                <Controller
                  name="trx_date" //this is the name for actual data name that store into data base
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.input}
                      type="datetime-local" // data type that stroe into data base
                      label="Transaction Date" // thing to display on submission form
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
                <FormHelperText error={!!errors?.trx_date?.message}>
                  {errors.trx_date && 'Incorrect Format.'}
                </FormHelperText>
              </FormControl>
              {/* TEXT AREA */}
              <FormControl className={classes.formControls}>
                <Controller
                  name="trx_details"
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
                <FormHelperText error={!!errors?.trx_details?.message}>
                  {errors.trx_details && errors.trx_details.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              {/* TRX CATEGORY */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trx_category">
                  Transaction Category
                </InputLabel>
                <Controller
                  name="trx_category"
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
                <FormHelperText error={!!errors?.trx_category?.message}>
                  {errors.trx_category && errors.trx_category.message}
                </FormHelperText>
              </FormControl>
              {/* TRX AMOUNT */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trx_amount">Transaction Amount</InputLabel>
                <Controller
                  name="trx_amount"
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
                <FormHelperText error={!!errors?.trx_amount?.message}>
                  {errors.trx_amount && 'Required.'}
                </FormHelperText>
              </FormControl>
              {/* LINKED ACCOUNT */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="trx_bank">Linked Account</InputLabel>
                <Controller
                  name="trx_bank"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select native {...field} className={classes.input}>
                      <option aria-label="None" value="" />
                      <option value="Bank of America">Bank of America</option>
                    </Select>
                  )}
                />
                <FormHelperText error={!!errors?.trx_bank?.message}>
                  {errors.trx_bank && 'Required.'}
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
