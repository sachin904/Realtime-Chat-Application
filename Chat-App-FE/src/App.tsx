
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[message,setMessages]=useState(["hiii","hii there"]);
  const inputRef =useRef<HTMLInputElement>(null); 
  const wsRef = useRef<WebSocket | null>(null);
  function sendMessage(){
    if(wsRef.current){
  wsRef.current.send(JSON.stringify({
    type:"chat",
    payload:{
      message:inputRef.current?.value
    }
  }))
}
  }
  function sendRoomId(){
    if(wsRef.current){
    wsRef.current.send(JSON.stringify({
      type:"join",
      payload:{
        roomId:"red"
      }
    }))
  }
  }
 
  useEffect(()=>{
      const ws= new WebSocket("ws://localhost:8080");
      console.log("user connected ");
      wsRef.current=ws;
      ws.onmessage=(event)=>{
        setMessages(m=>[...m,event.data]);
      }
   

  },[])
 return<div className='h-screen bg-black flex-col'>
  <br/><br/>
    <div className='flex-10 bg-black '>
      {message.map(message=><div className='m-8' ><span className='bg-white text-black rounded p-4 '>{message}</span></div>)}
    </div>
    <div className=' fixed bottom-0 right-0 left-0 flex-2 bg-white flex p-2 '>
           <input ref={inputRef} className='w-full p-4 bg-gray-400 text-white'></input>
           <button onClick={sendMessage} className='bg-purple-700 text-white'>send message</button>
           <button onClick={sendRoomId}>send room id</button>
    </div>
 </div>

   
}

export default App
