import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushiData, index)=>{
          return <Sushi 
          key={index} 
          currentBudget={props.currentBudget} 
          sushiData={sushiData} 
          updateBudget={props.updateBudget} 
          emptyPlates={props.emptyPlates}/>
        })}
        <MoreButton 
        moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer