import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';

export default function SubmitDialog(props) {
  if (props.status === 'incomplete') {
    return (
      <Dialog open={props.open} onClose={props.onClose}>
        <Alert severity="error" style={{padding: '12px 18px'}}>
          <AlertTitle>Error</AlertTitle>
          Some fields are not completed, please check!
        </Alert>
      </Dialog>
    )
  } else if (props.status === 'complete') {
    return (
      <Dialog open={props.open} onClose={props.onClose}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You finished the form!
        </Alert>
      </Dialog>
    )
  }
}