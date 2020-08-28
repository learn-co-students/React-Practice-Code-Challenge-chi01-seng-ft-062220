import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          //7. take props map over them and render
          //    them into child component "Sushi"
          //    of sushi container
          props.allMySushis.slice(props.srartIndex, props.startIndex + 4).map(sushi => <Sushi key={sushi.id} sushi={sushi} addPlate={props.addPlate} buySushi={props.buySushi} wallet={props.wallet}/>)
          //10. passing sushi props to sushi child from sushi container parent
          //13. slicing the sushis so 4 pop up 
          //15. splicing with index props
          //31. adding addPlate to the sushi
          //42. adding buySushi function to sushi
          //45. adding wallet to sushi
        }
        <MoreButton moreSushiButton={props.moreSushiButton}/>
        {/* 19 more button now has the function as props*/}
      </div>
    </Fragment>
  )
}

export default SushiContainer
//6. how to render these onto the page

//8 Render Price correctly and Name