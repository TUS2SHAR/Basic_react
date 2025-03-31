
import './App.css'
import Alert from './components/Alert'

function App() {
  function onMouseOver(){
  alert('I am The Second year student of IIIT_Bhopal')
  }
  function handleSubmit(e){
     e.preventDefault();
     alert('Would I submit the Form');
  }

  return (
    <div>
    <p onMouseOver={onMouseOver}>Would you want to know who the i am </p>
    <Alert/>
    <form onSubmit={handleSubmit}>
    <input  type='text'  />
    <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default App
