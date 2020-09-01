import React from 'react'

const MoreButton = (props) => {
  const resetting = () => {
    props.moreSushi()
  }
    return <button onClick={resetting}>
            More sushi!
          </button>
}

export default MoreButton