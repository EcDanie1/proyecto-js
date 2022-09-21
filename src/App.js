import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
  <> 
    <NavBar/>
    <CardWidget/>
    <ItemListContainer greeting='Bienvenido'/>
    
  </>
  );
}

export default App;
