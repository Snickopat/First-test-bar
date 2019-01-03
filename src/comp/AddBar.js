import React, { Component } from 'react';
import {Button} from 'react-bootstrap'


class AddBar extends Component {
  render() {
    return (
      <div className="App">
        <input  id="name"/>
        <input  id="rating"/>
        <Button  bsStyle="primary" onClick={this.addBar.bind(this)}  >Add Bar</Button>
      </div>
    );
  }

  addBar()
  { 
    var objToJson={
        name:document.getElementById("name").value,
        rating:document.getElementById("rating").value
    } 
    fetch('http://localhost:3000/bars', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(objToJson )
     }).then(resp=>resp.json())
     .then(data=>
       {
           alert('added new game!');
       });

  }


}


export default AddBar;
