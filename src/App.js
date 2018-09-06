import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'

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

  addToDisplay (char) {
    this.setState({ display: this.state.display + char
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Calulator Redux</h1>
        </header>
        <div className='columns'>
          <div id='display' className='column is-three-fifths'>{this.state.display}</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: ''})}>C</div>
        </div>
        <div className='columns'>
          <div className='column is-one-fifth' onClick={() => this.addToDisplay('7')}>7</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '8'})}>8</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '9'})}>9</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '/'})}>/</div>
        </div>
        <div className='columns'>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '4'})}>4</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '5'})}>5</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '6'})}>6</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '*'})}>*</div>
        </div>
        <div className='columns'>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '1'})}>1</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '2'})}>2</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '3'})}>3</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '-'})}>-</div>
        </div>
        <div className='columns'>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '0'})}>0</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '.'})}>.</div>
          <div className='column is-one-fifth' onClick={() => this.equals()}>=</div>
          <div className='column is-one-fifth' onClick={() => this.setState({
            display: this.state.display + '+'})}>+</div>
        </div>
        <div id='history'>{this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
      </div>
    )
  }
}

export default App
