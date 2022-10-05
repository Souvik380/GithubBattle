import React, { Component } from 'react'
import utils from '../utils/utils'

export default class Allrepos extends Component {
    constructor(){
        super()
        utils('all').then(datas=>{
            this.props.clickHandler(datas)
          }).catch(err=>console.log(err))
        }
  render() {
    return (
      <div></div>
    )
  }
}
