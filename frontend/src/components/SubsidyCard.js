import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SubsidyCard = ({ beneficiary }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Beneficiary: {beneficiary.address}</Typography>
        <Typography variant="body2">Amount: {beneficiary.amount}</Typography>
        <Typography variant="body2">Eligible: {beneficiary.eligible ? 'Yes' : 'No'}</Typography>
        <Typography variant="body2">Paid: {beneficiary.paid ? 'Yes' : 'No'}</Typography>
      </CardContent>
    </Card>
  );
};

export default SubsidyCard;
