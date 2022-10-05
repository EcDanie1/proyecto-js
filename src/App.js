import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/shop/ItemListContainer';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import ItemList2 from './components/shop/ItemList2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import ItemDetail from './components/shop/ItemDetail';


function App() {
  return (
  <> 
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path={'/swapi'} element={<StarWarsContainer/>} />
      <Route path={'/shop'} element={<ItemList2/>} />
      <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
      <Route path={'/widget'} element={<CardWidget/>} />
      <Route path={'/404'} element={<Error404/>} />
    </Routes>
  </BrowserRouter>  
    {/*<CardWidget/>
    <ItemListContainer greeting='Bienvenido'/>
    <ItemList2/>
    <StarWarsContainer/>*/}
    
  </>
  );
}

export default App;
