import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        endIcon={<SendIcon style={{ color: '#1e1e1e', fontSize: '1rem'}}/>}
        type='submit'
      >
        Enviar
      </Button>
    </div>
  );
}