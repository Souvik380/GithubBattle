import React, { Component } from 'react'
import utils from '../utils/utils'

export default class JSrepos extends Component {
    constructor(){
        super()
        utils('js').then(datas=>{
            this.props.clickHandler(datas)
          }).catch(err=>console.log(err))
        }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}