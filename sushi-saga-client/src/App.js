import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let pageNumber = 1

class App extends Component {
  constructor(){
    super();
    this.state={
      sushi: [],
      budget: 200,
      purchased: []
    }
  }

  componentDidMount(){
    fetch(`${API}/?_limit=4`)
      .then(response => response.json())
        .then(sushiData => this.setState({
          sushi: sushiData
        }))
  }

  moreSushi=()=>{
    pageNumber +=1
    this.gettingSushi(pageNumber)
  }

  gettingSushi=(pageNumber)=>{
    fetch(`${API}/?_limit=4&_page=${pageNumber}`)
      .then(response => response.json())
        .then(sushiData => this.setState({
          sushi: sushiData
        }))
  }

  budgetUpdate=(price)=>{
    this.setState({
      budget: this.state.budget-price
    })
  }
  
  emptyPlates=(sushi)=>{
    this.setState({
      purchased: [...this.state.purchased, sushi]
    })
  }

  render() {
    console.log(this.state.sushi)
    console.log(this.state.purchased)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} currentBudget={this.state.budget} moreSushi={this.moreSushi} updateBudget={this.budgetUpdate} emptyPlates={this.emptyPlates}/>
        <Table budget={this.state.budget} emptyPlates={this.state.purchased}/>
      </div>
    );
  }
}

export default App;