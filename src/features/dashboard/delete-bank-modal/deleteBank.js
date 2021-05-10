import {
  Button,
  Grid,
  Modal,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useAddTrxStyles } from '../../../components/AddTransactionModal/muiFormStyle';
import { db } from '../../../data/firebase';
import useUserData from '../../../data/hooks/use-user-data';
import useAppContext from '../../../hooks/AppContext';
import formatMoney from '../../../utils/formatMoney';

export default function DeleteBank({ handleClose, open }) {
  const classes = useAddTrxStyles();
  const { user } = useAppContext();
  const { data, status } = useUserData(user.uid);

  const [userBank, setUserBank] = useState(null);

  const handleSelectChange = (event) => {
    setUserBank(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userBank === null) {
      return;
    }
    try {
      const tempBanksArr = data.banks.filter(
        (bank) => bank.bank_id !== userBank
      );

      await db.collection('users').doc(user.uid).update({
        banks: tempBanksArr,
      });

      console.log(
        `Successfully deleted a bank account to a user document::`,
        userBank
      );
    } catch (err) {
      console.error(err);
    }
    handleClose();
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Paper className={classes.paper} elevation={3}>
        <form onSubmit={onSubmit}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} className={classes.headergrid}>
              <Typography variant="h4">Delete Bank</Typography>
              <Typography variant="body1">
                Delete a bank to your bank account lists.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select
                onChange={handleSelectChange}
                native
                className={classes.input}
              >
                <option aria-label="None" value="" label="Select an Account" />
                {data.banks.map((element) => {
                  return (
                    <option key={element.bank_id} value={element.bank_id}>
                      {element.bankName} | {element.acctType} |
                      {formatMoney(element.acctAmount * 100)}
                    </option>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12} className={classes.footerGrid}>
              <Button variant="contained" type="submit" color="primary">
                Delete
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
