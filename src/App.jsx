import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
