import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:5000/sushis";

class App extends Component {
  // 2. after geting the data set state to an empty array
  state = {
    allMySushis: [],
    startIndex: 0,
    eatenSushi: [],
    wallet: 1000
    //37 adding wallet as state starting with $1000
    //25 setting a state to include an empty
    //      array that can include eaten sushi
    // 14. setting state to include indexes for splicing
  };

  // 1. get all the data from an endpoint
  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushiObjects) => {
        this.setState({ allMySushis: sushiObjects });
      });
  }
  //3. set state to the sushi objects

  //17. Updating state to include more sushis with a function
  moreSushiButton = () => {
    this.setState({
      startIndex: this.state.startIndex + 4,
    });
  };

  //35. passing in sushiObjects as argument so you can access them and 
  //    pass them down as the thing that goes into the array
  addPlate = (sushiObjects) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObjects.props.sushi],//35. adding .props.sushi to just return the single object when clicking
    }); //29. function to update state
  };

  //40. buying sushi function to manipulate wallet
  buySushi = (cost) =>{
    this.setState ({
      wallet: this.state.wallet - cost
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          startIndex={this.state.startIndex}
          allMySushis={this.state.allMySushis}
          moreSushiButton={this.moreSushiButton}
          addPlate={this.addPlate}
          buySushi={this.buySushi}
          wallet={this.state.wallet}

        />
        {/* 5. Passing Down Props into child component*/}
        {/* 16. passing down index props */}
        {/* 18. passing down the function through props */}
        {/* 30. passing the function to sushi  container*/}
        {/* 41. passing the prop call back function buySushi to sushi container */}
        {/* 44. adding wallet to Sushi Container */}
        <Table eatenSushi={this.state.eatenSushi} 
                wallet={this.state.wallet}
        />
        {/* 27. passing down eatenShush as props to container */}
        {/* 38. passing wallet down to table child */}
        
      </div>
    );
  }
}

export default App;
// 4. now think about rendering sushis
//     and rendering them in the sushi container

//26. passing down eatnSushi down to table.
