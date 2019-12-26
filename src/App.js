import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isClicked: false
    }
  }

  onClickHandler = () => {
    this.setState({isClicked: true});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickHandler}>Button</button>
        <Text isClicked={this.state.isClicked} />
      </div>
    );
  }
}

const Text = (props) => {
  let text;
  if(props.isClicked){
    text = 'クリック済み';
  }else{
    text = '未クリック';
  }
  return (
    <p>{text}</p>
  );
}

export default App;
