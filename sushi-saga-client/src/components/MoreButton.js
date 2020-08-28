import React from 'react'

const MoreButton = (props) => {
    return <button onClick={props.moreSushiButton}>
    {/* 20. Onclick fires the props call back function */}
            More sushi!
          </button>
}

export default MoreButton