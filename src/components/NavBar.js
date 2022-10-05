import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
    <div className='flex justify-center'>
      <div className='flex justify-around mt-32 border w-[500px] text-2xl font-bold'>
        <Link to="/">All</Link>
        <Link to="/js">JavaScript</Link>
        <Link to="/ruby">Ruby</Link>
        <Link to="/java">Java</Link>
        <Link to="/css">CSS</Link>
        <Link to="/python">Python</Link>
      </div>
    </div>
    )
  }
}
