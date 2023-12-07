import React, { Fragment} from "react";

import { Alert, AlertTitle } from '@mui/material';



export default function Alltodo() {
 
   
  return (
    <Fragment>
      <Alert severity="info" >
        <AlertTitle>Tasks </AlertTitle>
        Click on square box to <strong>open (describe) and to mark done</strong>
      </Alert>
     
    </Fragment>
)};

