import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Container, Typography, Button } from '@mui/material';
import SubsidyList from './pages/SubsidyList';
import ApplySubsidy from './pages/ApplySubsidy';
import Navbar from './components/Navbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
});

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const networkData = SubsidyDistribution.networks[networkId];
      if (networkData) {
        const subsidy = new web3.eth.Contract(SubsidyDistribution.abi, networkData.address);
        setContract(subsidy);
        const balance = await web3.eth.getBalance(subsidy.options.address);
        setBalance(balance);
      } else {
        alert('Smart contract not deployed to detected network.');
      }
    };

    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.title}>Subsidy Distribution</Typography>
        <Typography variant="h5">Account: {account}</Typography>
        <Typography variant="h6">Contract Balance: {balance} wei</Typography>
        <ApplySubsidy contract={contract} />
        <SubsidyList contract={contract} />
      </Container>
    </div>
  );
}

export default App;
