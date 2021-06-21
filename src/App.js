import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />

        <Switch>         

          <Route exact path="/"><ItemListContainer /></Route>
          <Route exact path="/category/:categoryId"><ItemListContainer /></Route>
          <Route exact path="/item/:id"><ItemDetailContainer /></Route>

        </Switch> 

      </BrowserRouter>
  );
};

export default App;
