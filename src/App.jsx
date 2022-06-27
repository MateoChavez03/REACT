import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <ItemListContainer />
      </Row>
    </Container>
  );
}

export default App;
