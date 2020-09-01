import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { name, id, img_url, price } = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.eatSushiClick}>
        { 
          props.eatenSushis.includes(id)
           ?
            null
          :
            <img id={props.id} src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi