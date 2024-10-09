import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import SubsidyList from './SubsidyList';
import ApplySubsidy from './ApplySubsidy';
import web3 from './web3';
import SubsidyContract from './contracts/SubsidyDistribution.json';

const Dashboard = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SubsidyContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        SubsidyContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(contractInstance);
    };

    initWeb3();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to Subsidy Distribution Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Your Account: {account}</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ApplySubsidy contract={contract} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SubsidyList contract={contract} />
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={() => web3.eth.requestAccounts()}>
        Connect Wallet
      </Button>
    </Container>
  );
};

export default Dashboard;
