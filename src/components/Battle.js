import React, { Component } from 'react'
import Compare from '../utils/Compare'
import {FaUserFriends} from "react-icons/fa"
import {FaPlane} from "react-icons/fa"
import {FaTrophy} from "react-icons/fa"

export default class Battle extends Component {
  constructor(){
    Compare().then(datas=>console.log(datas)).catch(err=>console.log(err))
  }


  render() {
    return (
      <>
        <h1 className='text-3xl flex justify-center mt-[150px]'>Instructions</h1>

        <div className='flex justify-around mt-8'>
          <div>
            <p className='flex justify-center text-3xl'>Enter two Github Users</p>
            <div className='bg-gray-200 w-[250px] h-[250px] flex justify-center items-center'>
              <FaUserFriends size="150px" color="orange" />
            </div>
          </div>

          <div>
            <p className='flex justify-center  text-3xl'>Battle</p>
            <div className='bg-gray-200 w-[250px] h-[250px] flex justify-center items-center'>
              <FaPlane size="150px" color="gray" />
            </div>
          </div>


          <div>
            <p className='flex justify-center  text-3xl'>Winner</p>
            <div className='bg-gray-200 w-[250px] h-[250px] flex justify-center items-center'>
              <FaTrophy size="150px" color="orange" />
            </div>
          </div>

        </div>

        <h1 className='text-3xl flex justify-center mt-8'>Players</h1>
        <div className='flex justify-around mb-64'>
          <div>
            <p>Player One</p>
            <div className='flex space-x-2'>
              <input type="text" placeholder='github username'/>
              <button>Submit</button>
            </div>
          </div>

          <div>
            <p>Player Two</p>
            <div className='flex space-x-2'>
              <input type="text" placeholder='github username'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
