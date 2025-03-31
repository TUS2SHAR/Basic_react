import React from 'react'

const Alert = () => {

function handleClick(){
alert('welcome to react Tutorial');
}
  return (
    <div>
      <button onClick={handleClick}> click me
      </button>
    </div>
  )
}

export default Alert
