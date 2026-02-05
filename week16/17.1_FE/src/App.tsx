import { useEffect, useState , useRef } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState();
  const inputref = useRef();


  function sendmessege(){
    if(!socket){
      return;
    }
    const messege = inputref.current.value;

    //@ts-ignore
    socket.send(messege);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev)=>{
      alert(ev.data);
    }
  } , [])


  return <>
  <div>
    <input ref={inputref} type='text' placeholder='messege....'></input>

    <button onClick={sendmessege}>send</button>
  </div>
    </>
}

export default App
