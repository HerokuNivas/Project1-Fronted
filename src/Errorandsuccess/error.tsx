import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function ErrorAlert() {
  return (
    <Stack sx={{ width: '40%' }} style={{marginTop: "10px"}} spacing={2}>
      <Alert severity="error">This field is required</Alert>
    </Stack>
  );
}
