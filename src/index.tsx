import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {CoolInput} from './components/CoolInput'

interface MyComponentProp {
    name: string
    age: number
}

class MyComponent extends React.Component<MyComponentProp, {}>{
  render() {
    return (
      <div>
          <h1>Name: { this.props.name } Age: { this.props.age }</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
        <CoolInput value="" onUpdate={ (x:string) => {} } />
        <MyComponent name="knjname" age={33} />
  </div>,
  document.getElementById("app")
);
