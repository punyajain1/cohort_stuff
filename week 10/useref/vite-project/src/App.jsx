import { useRef, useState } from 'react'

function App() {
  const [currcount, setcurrcount] = useState(0)
  const timer = useRef(null);
  function Start(){
    const value = setInterval(function(){
      setcurrcount(c => c+1)
    }, 1000);
    timer.current = value;
  }

  function Stop(){
    clearInterval(timer.current);
    timer.current = null;
  }

  return (
    <>
      {currcount}
      <button onClick={Start}>start</button>
      <button onClick={Stop}>stop</button>
    </>
  )
}

export default App
