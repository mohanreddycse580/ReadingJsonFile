import React from "react";
import "./styles.css";
import jsonData from "./LoadJson.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const loadData = JSON.parse(JSON.stringify(jsonData));
    console.log(loadData);
    this.setState({
      data: loadData
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Reading Json File </h1>

        {this.state.data.map((d, index) => (
          <div className="tableOrder">
            <table>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Gender</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{d.id}</td>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.gender}</td>
                  <td>{d.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
