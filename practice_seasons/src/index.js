import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={lat:null,errormessage:''};

    window.navigator.geolocation.getCurrentPosition(
      position=>{
        this.setState({lat:position.coords.latitude});
      },
      err=>{
        this.setState({errormessage:'User denied Geolocation'});
      
      });
  }
  //render is called all the time
  render(){
    //console.log(this.state.lat)
    if(this.state.errormessage&& !this.state.lat){
      return(
        <div>Error:{this.state.errormessage}</div>
      );
    }

    if(!this.state.errormessage&&this.state.lat){
      return(
        <div>Latitude:{this.state.lat}</div>
      );
    }

    return(<div>Loading...</div>);
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));




