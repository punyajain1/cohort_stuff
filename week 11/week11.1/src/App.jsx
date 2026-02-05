import React, { useState } from 'react';
import { useFetch } from './hooks/useFetch';


function App() {
  let[curr,setCurr] = useState(1);
  const {post , load} = useFetch("https://jsonplaceholder.typicode.com/posts/"+curr);
  if(load){
    return <>loading......</>
  }
  return (
    <div>
      <button onClick={() => setCurr(1)}>1</button>
      <button onClick={() => setCurr(2)}>2</button>
      <button onClick={() => setCurr(3)}>3</button>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
}

export default App;
