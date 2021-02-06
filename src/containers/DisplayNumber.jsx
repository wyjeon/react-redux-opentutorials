import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
export default connect()(DisplayNumber);

//line3과 같은 코드
/*
import React, { Component } from 'react'
import store from '../store'
export default class extends Component {
  state = { number: store.getState().number }
  constructor(props) {
    super(props)
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number })
      }.bind(this)
    )
  }
  render() {
    return <DisplayNumber number={this.state.number} unit={this.props.unit}/>
  }
}
*/
