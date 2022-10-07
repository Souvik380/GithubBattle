import React, { Component } from 'react'
import utils from '../utils/utils'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Repos from './Repos'

export default class Popular extends Component {
      
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
      

        render() {
            return (
                <>   
                  <NavBar clickHandler={this.clickHandler} />
                  <div className='flex flex-wrap justify-center'>
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
          
        </>
            )
        }
}
