import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import utils from '../utils/utils'

export default class NavBar extends Component {

  setData=(lang)=>{
    utils(lang).then(datas=>{
      this.props.clickHandler(datas)
    }).catch(err=>console.log(err))
  }
  
  render() {
    return (
    <div className='flex justify-center'>
      <div className='flex justify-around mt-32 border w-[500px] text-2xl font-bold'>
        <div onClick={()=>this.setData('all')}>All</div>
        <div onClick={()=>this.setData('js')}>JavaScript</div>
        <div onClick={()=>this.setData('ruby')}>Ruby</div>
        <div onClick={()=>this.setData('java')}>Java</div>
        <div onClick={()=>this.setData('css')}>CSS</div>
        <div onClick={()=>this.setData('python')}>Python</div>
      </div>
    </div>
    )
  }
}
