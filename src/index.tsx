import * as React from 'react'
import * as ReactDOM from 'react-dom'

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
          <h1>React rendered!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById("app")
);


