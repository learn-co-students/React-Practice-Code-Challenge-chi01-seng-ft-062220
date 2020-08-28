import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((sushi, index) => {
      return <div key={sushi.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
    //36. now that we have sushi as object, replace x with sushi and give table an key 
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.wallet} remaining!
        {/* 39. passed down props now can be used on table*/}
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
//28. prop call back function already existed
//      just passed props into render Plates 