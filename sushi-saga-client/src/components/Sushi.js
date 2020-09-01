import React, { Fragment, useState } from 'react'

const Sushi = (props) => {
  const [eaten, setEaten] = useState([]);

  let eatenAndPaid=()=>{
    if(props.sushiData.price <= props.currentBudget){
      setEaten([...eaten, props.sushiData])
      props.updateBudget(props.sushiData.price)
      props.emptyPlates(props.sushiData)
    } 
  }
  
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" onClick={eatenAndPaid}>
          {eaten.includes(props.sushiData) ? null : <img src={props.sushiData.img_url} width="100%" alt={props.sushiData.name}/>}
        </div>
        <h4 className="sushi-details">
          {props.sushiData.name} - ${props.sushiData.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi
