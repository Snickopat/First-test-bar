import React, { Component } from 'react';



class Bars extends Component {
     state={
          allGames:[]
          }
    constructor(props)
        {
           super(props); 
        }

componentDidMount()
{
    fetch("http://localhost:3000/bars")
    .then(r=>r.json())
    .then(data=>
    {
       this.setState({
            allBars:data   
       })
    })
    .catch(err=>
    {
        console.log(err);
    })
}
  render() {
    return (
      <div className="App">
            All games

        <table className="table table-striped">
          <thead>
  
            <tr>
              <th> 
                NAME
              </th> 
              <th>
                PLAYERS
              </th>
            </tr>

          </thead>
          <tbody>


            {
               this.state.allBars.map(g=> 
               <tr  key={g.id}  >
               <td>{g.name}</td>
               <td>{g.rating}</td>
               </tr> )
              }
          </tbody>

      </table>


      </div>
    );
  }
}

export default Bars;
