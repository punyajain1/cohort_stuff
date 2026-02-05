import { useEffect, useRef, useState } from "react";
import { socketStore } from "../components/socketstore";



export function Chatpage(){
    const [message , setmessage] = useState<any>([]);
    const [input, setInput] = useState("");
    const ws = socketStore.socket;
    const userName = socketStore.name;
       useEffect(()=>{
        ws.onmessage = (event)=> {
            try{
                const parsedMessage = JSON.parse(event.data);
                if (parsedMessage.type === "chat") {
                    setmessage((message) => [...message, parsedMessage.payload]);
                }
            }catch(error){
                console.error("Error parsing message:", error);
            }
        }
        ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };
        return () => {
            ws.onmessage = null;
            ws.onerror = null;
        };
    
      } , []);

      function sendmessage() {
        const ws = socketStore.socket;
        console.log(ws);
        if (ws && input.trim()) {
            ws.send(JSON.stringify({
                type: "chat",
                payload: { message: input.trim() ,name: userName }}
            ));
            setInput("");
        }
    }

    return(
        <div className="bg-pro-400 w-screen h-screen pt-24 pb-10 flex justify-center">
        <div className="border-2 relative shadow-md shadow-white border-white rounded-lg w-96 h-min-96 bg-pro-300">
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-150px)]">
            {message.map((msg, index) => (
              <div key={index} className={`flex ${msg.name === userName ? "justify-end" : "justify-start"}`}>
                <span className={`${msg.name === userName ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} rounded p-4 m-2 max-w-xs`}>{msg.name}: {msg.message}</span>
              </div>
            ))}
          </div>
          <div className="w-full absolute bottom-0 left-0 bg-white flex"> 
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-4" type="text" placeholder="message...."/> 
            <button onClick={sendmessage} className="bg-pro-100 text-black px-4 py-2">Send!!!!</button>
          </div>
        </div>
      </div>
      
    )
}
{/* <div className='h-screen bg-black	'>
      <div className='h-[90vh]'>
      {message.map(message => <div className='pt-8'>
          <span className='bg-white text-black rounded p-4 m-8'>
            {message}
          </span>
        
        </div>)}
      </div>
      <div className='w-full bg-white flex'> 
        <input id="message" className='flex-1 p-4' type="text " placeholder='message....' />
        <button onClick={()=>{
          const message = document.getElementById("message")?.value;
          wsref.current.send(JSON.stringify({
            type: "chat",
            payload:{
              message:message
            }
          }))
        }} className='bg-purple-500 text-white '>send!!!!</button>
      </div>
    </div> */}