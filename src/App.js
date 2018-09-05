import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
  }
  equals () {
    let display = this.state.display
    let result = eval(this.state.display)
    this.setState({history: this.state.history.concat(`${display} = ${result}`), display: result})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Calulator Redux</h1>
        </header>
        <div id='display'>{this.state.display}</div>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '1'})}>1</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '2'})}>2</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '3'})}>3</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '4'})}>4</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '5'})}>5</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '6'})}>6</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '7'})}>7</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '8'})}>8</button>
        <button className='numberButton' onClick={() => this.setState({
          display: this.state.display + '9'})}>9</button>
        <button className='numberButton' onClick={() => this.setState({
          display: ''})}>C</button>
        <button className='operatorButton' onClick={() => this.setState({
          display: this.state.display + '+'})}>+</button>
        <button className='operatorButton' onClick={() => this.setState({
          display: this.state.display + '-'})}>-</button>
        <button className='operatorButton' onClick={() => this.setState({
          display: this.state.display + '/'})}>/</button>
        <button className='operatorButton' onClick={() => this.setState({
          display: this.state.display + '*'})}>*</button>
        <button className='operatorButton' onClick={() => this.equals()}>=</button>
        <div id='history'>{this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
      </div>

    )
  }
}

export default App
