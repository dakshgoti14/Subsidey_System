import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ApplySubsidy = ({ contract }) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract) {
      await contract.methods.addBeneficiary(address, amount).send({ from: window.ethereum.selectedAddress });
      alert('Subsidy application submitted.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Beneficiary Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Subsidy Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">Apply for Subsidy</Button>
    </form>
  );
};

export default ApplySubsidy;
