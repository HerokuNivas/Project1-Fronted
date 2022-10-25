import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

export default function ErrorAlert1(props) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error<CloseIcon style={{position: "absolute", right: "20px"}} onClick={() => {props.popup(false)}}/></AlertTitle>
          Oops! An error occured — <strong>{props.text}</strong>
        </Alert>
      </Stack>
    );
  }
  