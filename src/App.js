import {Container} from 'react-bootstrap'
import Header  from './components/Header'
import Footer  from './components/Footer'
import Starter from './components/Starter';
import DataAccordion from './components/DataAccordion';
import {BrowserRouter as Router } from  'react-router-dom';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <Router >
      <Header />
      <main>
      <Container>
      <br></br>
        <br></br>
        <Starter></Starter>
        <br></br>
        <br></br>
        <DataAccordion></DataAccordion>
      </Container>
      <br></br>
      <GetInTouch/>
      </main> 
      <Footer />
    </Router>
  );
}

export default App;