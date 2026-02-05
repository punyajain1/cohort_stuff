import {TextInput} from "@repo/ui/input"

export default function Home() {
  return (
    <div style={{
      height : "100vw",
      width : "100hw",
      display:"flex",
      justifyContent:"center",
      background:"black",
      justifyItems:"center"
    }}>
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
      }}>
        
       <TextInput placeholder="enter code"/>
        <br></br>
        <button onChange={()=>{
          
        }}>join room</button> 
      </div>
      
    </div>
  );
}
