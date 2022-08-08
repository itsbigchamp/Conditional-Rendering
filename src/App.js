import {useState} from 'react';
import Loading from './loading';
import Loaded from './loaded';
import './App.css';

function App() {
// const isLoaded = true;
const [isLoaded,setIsLoaded] = useState(false)
const [objectExample,setObjectExample] = useState({name:'Object Example'})
const [username,setUsername] = useState("Gavin")
const numbers = [1,2,3,4,5,6,7,8,9,0]
// const ternary = isLoaded ? 'Yes' : 'No'

  return (
    <div className="App">
      <h1>Username is:{username !== "" ? username : "Guest"}</h1>
      <h1>Username is:{username || "Guest"}</h1>
      <h1>{
        numbers.length > 0 && 
        <>
         {numbers.map((num) => {
          return num + "&"
         })}
          <Loaded />
          <h2>I have {numbers.length} numbers</h2>
        </>
        }</h1>


       <button onClick={()=> {
         console.log('button clicked')
         setIsLoaded(!isLoaded)
       }}>Change Loaded</button>
       <h1>{objectExample.name}</h1>
       <h1>{isLoaded ? 'Yes' : 'No'}</h1>
       {
        isLoaded
        ?
      <Loaded />
      :
      <Loading/>
       }
      <h1>isLoaded = {String(isLoaded)}</h1>
    </div>
  );
}

export default App;
