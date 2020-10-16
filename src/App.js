import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/db.json").then((
      { data }) => {
      setPizzas(data.pizzas) 
      }
    );
    
   
  }, [])
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
