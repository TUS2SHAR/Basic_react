
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import { useState } from 'react';

function App() {
  const [count ,setCount] =useState(0);

  function handleClick(){
  setCount(count+1);
  }

  return (
  

    <div>
    <Button  handleClick={handleClick} text="click Me">
    <h1>{count}</h1>
    </Button>
    {/* <Card>
    <h1>Backend Engineer</h1>
    <p>Tushar Pandey</p>
    <p>Tushar I Graduate From IIIT Bhopal</p>
    </Card> */}
    </div>
  )
}

export default App
