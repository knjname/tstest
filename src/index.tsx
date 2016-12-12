import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface MyComponentProp {
    name: string
}

class MyComponent extends React.Component<MyComponentProp, {}>{
  render() {
    return (
      <div>
          <h1>{ this.props.name } rendered!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent name="knjname" />,
  document.getElementById("app")
);
