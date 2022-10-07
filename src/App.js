import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Popular from './components/Popular';
import Battle from "./components/Battle"

class App extends React.Component{
  
  render(){
    return(
      <BrowserRouter>
        <div className='flex space-x-3 mt-8 ml-8'>
          <Link to="/">Popular</Link>
          <Link to="/battle">Battle</Link>
        </div>

        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/battle" element={<Battle />} />         
        </Routes>

      </BrowserRouter>
    )
  }
}

export default App
