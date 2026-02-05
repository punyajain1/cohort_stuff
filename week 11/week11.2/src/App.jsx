import { useState } from 'react'
import './App.css'
import { RecoilRoot , atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom , isEven} from './store/atoms/counter'




function App() {


  return (
    <>
    <RecoilRoot>
      <Counter />
      <Iseven/>
      <br></br>
      <Increase/>
      <Decrease/>
    </RecoilRoot>
    </>
  )
}
function Iseven(){
  const curr = useRecoilValue(isEven);
  return <div>
    {curr%2 !=0 ? "even" : "odd"}
  </div>
}
function Counter(){
  const count = useRecoilValue(counterAtom);
  return(
    <div>
      {count}
    </div>
  )
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <>
  <button onClick={function(){setCount(c=>c+2)}}>increase</button>
  </>
}
function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return <>
  <button onClick={function(){setCount(c=>c-1)}}>decrease</button>
  </>
}



export default App
