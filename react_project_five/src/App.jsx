import{useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn.jsx'
import LogoutBtn from './components/logoutBtn.jsx'
function App() {
  
 const[login,setButton]=useState(false)

 if (login){
  return (
   <div>
  <h1>Welcome Everyone in React Tutorial</h1>
  <LoginBtn/>
  
   </div>
  )}
  else{
  return (
   <div>
  <h1>Welcome Everyone in React Tutorial</h1>
  <LogoutBtn/>
  
   </div>
   )}
return(
<div>
<h1>Welcome Everyone in React Tutorial</h1>
{login?<LoginBtn/> : <LogoutBtn/>}
</div>
)

}

export default App
