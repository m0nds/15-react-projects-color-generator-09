import { Alert } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
    <div>
        <Alert severity='error'>Incorrect hexcode! Please enter a correct hexcode</Alert>
    </div>
  )
}

export default Error