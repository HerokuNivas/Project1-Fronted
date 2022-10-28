import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import '../css/Success.css';
import CloseIcon from '@mui/icons-material/Close';

export default function SuccessAlert(props) {
    return (
      /* This is the stack which contains the success message code */
      <Stack sx={{ width: '100%' }} spacing={2} style={{marginTop: "1.8rem"}}>
        <Alert severity="success">
          <AlertTitle>Success<CloseIcon style={{position: "absolute", right: "20px"}} onClick={() => {props.popup(false)}}/></AlertTitle>
          Inverted Index File generated successfully. Click— <a className='successAlert text-success' href={props.link} rel="noopener noreffer" target="_blank">here </a>
           to open it.
        </Alert>
      </Stack>
    );
  }