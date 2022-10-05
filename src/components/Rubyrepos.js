import React, { Component } from 'react'
import utils from '../utils/utils'

export default class Rubyrepos extends Component {
    constructor(){
        super()
        utils('ruby').then(datas=>{
            this.props.clickHandler(datas)
          }).catch(err=>console.log(err))
        }
  render() {
    return (
      <div></div>
    )
  }
}
