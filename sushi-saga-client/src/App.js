import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushis:[],
      fourSushis: [],
      money: 100,
      eatenSushis: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(data => data.json())
    .then(sushisArr => {
      let fourSush = sushisArr.splice(-4)
      this.setState({
        allSushis: sushisArr,
        fourSushis: fourSush
      })
    })
  }

  moreSushiClick = () => {
    let newSushis = this.state.allSushis.splice(-4)
    // console.log(newSushis, this.state.allSushis)
    this.setState({
     fourSushis: newSushis
    })
  }

  eatSushiClick = (e) => {
    if(e.target.id){
      console.log(e.target)
      let eatenSushiID = parseInt(e.target.id)
      let eatenSushi = this.state.fourSushis.filter(sushi => sushi.id === eatenSushiID) 
      let sushiPrice = eatenSushi[0].price
      if (this.state.money >= sushiPrice){
        this.setState({
          eatenSushis: [...this.state.eatenSushis, eatenSushiID],
          money: (this.state.money - sushiPrice)
        })
      }
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatenSushis={this.state.eatenSushis} eatSushiClick={this.eatSushiClick} fourSushis={this.state.fourSushis} moreSushiClick={this.moreSushiClick} allSushis={this.state.allSushis} />
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money} />
      </div>
    );
  }
}

export default App;