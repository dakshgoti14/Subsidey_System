import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const SubsidyList = ({ contract }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      // Mock call to fetch beneficiaries
      const fetchedData = [
        { address: '0x123...', amount: 100, eligible: true, paid: false },
        { address: '0x456...', amount: 150, eligible: false, paid: false }
      ];
      setBeneficiaries(fetchedData);
    };

    fetchBeneficiaries();
  }, [contract]);

  return (
    <Grid container spacing={3}>
      {beneficiaries.map((beneficiary, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">Beneficiary: {beneficiary.address}</Typography>
              <Typography>Amount: {beneficiary.amount}</Typography>
              <Typography>Eligible: {beneficiary.eligible ? 'Yes' : 'No'}</Typography>
              <Typography>Paid: {beneficiary.paid ? 'Yes' : 'No'}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubsidyList;
