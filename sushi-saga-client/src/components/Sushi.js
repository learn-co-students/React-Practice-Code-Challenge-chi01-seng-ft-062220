import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  state={
    eaten: false
  }


// 24. defining the prop call back function here setting state to true
eatingSushiClick = () => {
  if (this.props.wallet >= this.props.sushi.price) {
//46. adding logic to not go negative
    this.setState({
      eaten: true
    })
    this.props.addPlate(this)//34. adding this as an argument which is suhiObjects
    {/*  32. callin on a prop call back function to fire on click*/}
    this.props.buySushi(this.props.sushi.price)
    //43. calling on prop call back function on click
  }
}

//21. Changing the state of Sushi so that 
//      it can have state we can manipulate
  render(){
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.state.eaten ? null : this.eatingSushiClick }>
           {/* 23. making a prop call back fuction  to fire on click*/}
           {/* 22. ternary shecking state if not eaten => show picture */}
           {/* 33. adding logic to only add one plate */}
           
        { this.state.eaten
          ? null
          :
            <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
        {/* 11. graabbing name and price and img_url from props passed down */}
      </h4>
    </div>
  )
}
}
export default Sushi

//9. Have to pass the props down first so back to the parent Container
//12. now lets think about limiting
