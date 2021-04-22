import { makeStyles } from '@material-ui/core';

export const useAddTrxStyles = makeStyles((theme) => ({
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
