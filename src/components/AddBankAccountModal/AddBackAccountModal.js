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
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { db, firebase } from '../../data/firebase';
import useAppContext from '../../hooks/AppContext';
import uid from '../../utils/uid';
import { useAddTrxStyles } from '../AddTransactionModal/muiFormStyle';

export default function AddBankAccountModal({ handleClose, open }) {
  const classes = useAddTrxStyles();
  const { user } = useAppContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bank_id = uid(); // <- this uid is not real uid. don't confused!
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .update({
          banks: firebase.firestore.FieldValue.arrayUnion({
            ...data,
            acctAmount: parseInt(data.acctAmount * 100), // need to convert to cents
            bank_id,
          }),
        });
      console.log(
        `Successfully added new bank account to a user document::`,
        bank_id
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
              <Typography variant="h4">Add Bank</Typography>
              <Typography variant="body1">
                Add a new bank to your bank account lists.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* BANK ACCOUNT TYPE */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="acctType">Account Type</InputLabel>
                <Controller
                  name="acctType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select native {...field} className={classes.input}>
                      <option aria-label="None" value="" />
                      <option value="Saving">Saving</option>
                      <option value="Checking">Checking</option>
                    </Select>
                  )}
                />
                <FormHelperText error={!!errors?.acctType?.message}>
                  {errors.acctType && errors.acctType.message}
                </FormHelperText>
              </FormControl>
              {/* BANK NAME */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="bankName">Bank Name</InputLabel>
                <Controller
                  name="bankName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      className={classes.input}
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  )}
                />
                <FormHelperText error={!!errors?.bankName?.message}>
                  {errors.bankName && 'Required.'}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              {/* BANK ACCOUNT AMOUNT */}
              <FormControl className={classes.formControls}>
                <InputLabel htmlFor="acctAmount">Account Amount</InputLabel>
                <Controller
                  name="acctAmount"
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
                <FormHelperText error={!!errors?.acctAmount?.message}>
                  {errors.acctAmount && 'Required.'}
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
