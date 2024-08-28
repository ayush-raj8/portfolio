import {Container} from 'react-bootstrap'
import Header  from './components/Header'
import Footer  from './components/Footer'
import Starter from './components/Starter';
import DataAccordion from './components/DataAccordion';
import {HashRouter as Router } from  'react-router-dom';
import GetInTouch from './components/GetInTouch';
import {Box, Divider as MuiDivider} from '@mui/material';

function App() {
  return (
    <Router >
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className='py-1 flex-grow-1'>
      <Container>
      <br></br>
        <br></br>
        <Starter ></Starter>
        <br></br>
        <br></br>
        <DataAccordion></DataAccordion>
      </Container>
      <br></br>
      <GetInTouch/>
      </main> 
      </Box>
    </Router>
  );
}

export default App;