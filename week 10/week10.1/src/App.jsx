import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link, Outlet , useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/neet/class-11' element={<Class11/>}></Route>
          <Route path='/neet/class-12' element={<Class12/>}></Route>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout(){
 return(
  <div>
    <div style={{height:"100hv"}}><h1><Heading/></h1></div>
    <div style={{height:"90hv"}}><h2><Outlet/></h2></div>
    <h2>footer</h2>
  </div>
 )
}
function Heading(){
  return (
    <div>
      <Link to={"/"}>Online Coaching</Link>
      |
      <Link to={"/neet/class-11"}>Class 11</Link>
      |
      <Link to={"/neet/class-12"}>Class 12</Link>
    </div>
  )
}
function Error(){
  return(
    <div>
      <h1>this is not accurate path</h1>
    </div>
  )
}
function Class11(){
  const navigate = useNavigate();
  function handleClick(){
    navigate('/')
  }
  return <>
  <div>
    NEET class11!!
    <button onClick={handleClick}>back</button>
  </div>
  </>
}
function Class12() {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      NEET Class 12!!
      <button onClick={handleClick}>Back</button>
    </div>
  );
}
function Landing(){
  return <>
  <div>
    Online Coaching
  </div>
  </>
}

export default App