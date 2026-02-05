import './App.css';
import { Children, useState } from 'react';

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 10, gap: 20 }}>
        <ProfileCard />
        <PostComponent />
        <Toggle />
        
      </div>
      <ICard>
        <h1>Card</h1>
        <div>hi there</div>
      </ICard>
    </div>
  );
}

function Toggle() {
  const [notificationcount, setnotificationcount] = useState(0);

  function toggle() {
    setnotificationcount(notificationcount + 1);
  }
  
  return (
    <div>
      <button onClick={toggle}>Toggle Button</button>
      {notificationcount}
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  border: "gray",
  borderWidth: 1,
  padding: 20,
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: 'flex' }}>
        <img
          src={"https://upload.wikimedia.org/wikipedia/en/c/c5/JSSATE_Noida.png"}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20
          }}
          alt="JSSATE Logo"
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <div><b>JSSATE</b></div>
          <div>10 Followers</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>12m</div>
            <img
              src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="}
              style={{ width: 12, height: 12 }}
              alt="clock"
            />
          </div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>Wanna to know how to end future?? , Join us</div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div style={style}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c5/JSSATE_Noida.png"
          style={{ borderRadius: "50%", width: 50, height: 50 }}
          alt="Profile"
        />
        <div style={{ fontSize: 20, marginTop: 10 }}>JSSATE Noida</div>
        <div style={{ fontSize: 15, color: "gray" }}>Shaping student's future</div>
        <div style={{ marginTop: 10 }}>Profile visitors: 22</div>
        <div>Post impressions: 10</div>
      </div>
    </div>
  );
}


function ICard({children}){
  return (
    <div style={{borderRadius: 20,
      border: "1px solid gray",
      width: 200,
      padding:20
      }}>
      <center>{children}</center>
    </div>
  )
}




export default App;
