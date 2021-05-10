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
import { db, firebase } from '../../../data/firebase';
import useUserData from '../../../data/hooks/use-user-data';
import useAppContext from '../../../hooks/AppContext';

export default function DeleteBank({ handleClose, open }) {
  const classes = useAddTrxStyles();
  const { user } = useAppContext();
  const { data, status } = useUserData(user.uid);

  const [userBank, setUserBank] = useState(null);

  const handleSelectChange = (event) => {
    setUserBank(event.target.value);
    // console.log(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userBank === null) {
      return;
    }
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .update({
          banks: firebase.firestore.FieldValue.arrayRemove(userBank),
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

  //   console.log(userBank);
  //   console.log(data);

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
            <Select
              onChange={handleSelectChange}
              native
              className={classes.input}
            >
              <option aria-label="None" value="" />
              {data.banks.map((element) => {
                return (
                  <option key={element.bank_id} value={element}>
                    {element.bankName} | {element.acctType} | $
                    {element.acctAmount}
                  </option>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12} className={classes.footerGrid}>
            <Button variant="contained" type="submit" color="primary">
              Delete
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
