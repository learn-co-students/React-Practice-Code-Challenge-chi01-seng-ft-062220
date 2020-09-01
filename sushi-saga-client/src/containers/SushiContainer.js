import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map((sushi) => {
            return <Sushi eatenSushis={props.eatenSushis} id={sushi.id} eatSushiClick={props.eatSushiClick} sushi={sushi}/>
          })
        }
        <MoreButton moreSushiClick={props.moreSushiClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer