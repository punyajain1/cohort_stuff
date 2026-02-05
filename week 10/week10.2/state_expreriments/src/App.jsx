import './App.css';
import { useState , createContext, useContext } from 'react';

const bulbContext = createContext();


function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);
  return <>
    <bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn}}>
    
    {children}

  </bulbContext.Provider>
  </>
}

function App() {
  return (
    <>
      <BulbProvider>
        <Lightbulb />
      </BulbProvider>
    </>
  );
}

function Lightbulb() {

  return (
    <>
      <Bulb/>
      <ToggleBulb/>
    </>
  );
}

function Bulb() {
  const {bulbOn} = useContext(bulbContext);
  return (
    <div>
      <div>{bulbOn ? "Bulb on" : "Bulb off"}</div> 
    </div>
  );
}

function ToggleBulb() {
  const {bulbOn , setBulbOn} = useContext(bulbContext);
  function toggle() {
    setBulbOn(!bulbOn); 
  }
  
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
