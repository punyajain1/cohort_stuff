import React, { Component } from 'react';


class Errorhandel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haserror: false
    };
  }
  static getDerivedStateFromError(error) {
    return { haserror: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error, errorInfo);
  }

  render() {
    if (this.state.haserror) {
      return <h2>Something went wrong</h2>;
    }
    return this.props.children;
  }
}

const Card2 = ({ children }) => {
  throw new Error("error")
  return (
      <div style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '20px',
          margin: '10px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
      }}>
          {children}
      </div>
  );
};
const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
          <Errorhandel>
            <Card2>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card2>
            </Errorhandel>
            <Errorhandel>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
            </Errorhandel>
            <Errorhandel>
            <Card>
              <h1>Card 3</h1>
              <p>this is mf punya</p>
            </Card>
            </Errorhandel>
        </div>
    );
};

export default App;
