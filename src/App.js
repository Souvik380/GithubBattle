import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import utils from './utils/utils.js';
import Repos from './components/Repos';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import JSrepos from './components/JSrepos';
import Rubyrepos from './components/Rubyrepos';
import Javarepos from './components/Javarepos';
import Cssrepos from './components/CSSrepos';
import Pythonrepos from './components/Pythonrepos';
import Allrepos from './components/Allrepos';

class App extends React.Component{
  constructor(){
    super()
    
    this.state={
      repos:[]
    }

    utils('all').then(datas=>{
      this.setState({
        repos:datas
      })
    }).catch(err=>console.log(err))
    }

    clickHandler=(data)=>{
      console.log(data)
      this.setState({
        repos:data
      })
    }
    
  render(){
    return(
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <div className='flex flex-wrap p-12'>
          {
            this.state.repos.map(data=>{
              return (
              <Repos
                image={data.owner.avatar_url} 
                name={data.name}
                stars={data.stargazers_count}
                forks={data.forks}
                open_issues={data.open_issues}
                />)
              })
            }
          </div>
          <Routes>
            <Route path="/" element={<Allrepos clickHandler={this.clickHandler} />} />
            <Route path="/js" element={<JSrepos clickHandler={this.clickHandler} />} />
            <Route path="/ruby" element={<Rubyrepos clickHandler={this.clickHandler}/>} />
            <Route path="/java" element={<Javarepos clickHandler={this.clickHandler}/>} />
            <Route path="/css" element={<Cssrepos clickHandler={this.clickHandler}/>} />
            <Route path="/python" element={<Pythonrepos clickHandler={this.clickHandler}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
