import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <ItemListContainer greeting="¡Hello World!" />
    </div>
  );
}

export default App;
