import React from 'react';



class Navbar extends React.Component{
  
  updateInfo = (e) =>{
    e.preventDefault();
    console.log(this.props);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
  }
  render(){
    return(
      <form className = "ui form">
        <div className = "field">
          <label>FirstName</label>
          <input type = "text" name = "firstName" placeholder ="First Name"/>
        </div>
        <div className = "field">
          <label>LastName</label>
          <input type = "text" name = "LastName" placeholder ="First Name"/>
        </div>
        <div className = "ui checkbox">
          <input type ="checkbox" tabIndex = "0" className= "hidden"/>
          <label> I agree to the terms and conditions</label>
        </div>
        <button onClick = {this.updateInfo}  className = "ui button" type ="submit">Submit</button>
      </form>
    )
  }
}

export default Navbar;