import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'brad'
    }
  }
  render() {
    return (
      <div>
        Hello {this.state.username}
      </div>
    )
  }
}
  
 ReactDOM.render(<Test />, document.getElementById('app'));