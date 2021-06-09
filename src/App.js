import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImgDemo from './assets/images/producto_demo.jpg';

// lista de productos 
const productList = [
  { id: 1, title: 'The Who', description: 'Descripción de prueba 1', pictureUrl:ImgDemo, price: 1500, stock: 20 },
  { id: 2, title: 'Ramones', description: 'Descripción de prueba 2', pictureUrl:ImgDemo, price: 1500, stock: 10 },
  { id: 3, title: 'The Rolling Stones', description: 'Descripción de prueba 3', pictureUrl:ImgDemo, price: 1500, stock: 30 },
  { id: 4, title: 'The Beatles', description: 'Descripción de prueba 4', pictureUrl:ImgDemo, price: 1500, stock: 7 }
]; 

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting="☺" poductos={productList} />     
    </div>
  );
}

export default App;
