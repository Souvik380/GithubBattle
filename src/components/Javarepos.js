import React, { Component } from 'react'
import utils from '../utils/utils'

export default class Javarepos extends Component {
    constructor(){
        super()
        utils('java').then(datas=>{
            this.props.clickHandler(datas)
          }).catch(err=>console.log(err))
        }
  render() {
    return (
      <div></div>
    )
  }
}
