import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Redux from "redux"

interface CoolInputProps {
    value: string
    onUpdate: (string) => void
}

interface CoolInputState {
    value: string
}

export class CoolInput extends React.Component<CoolInputProps, CoolInputState> {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    render() {
        return (
            <div>
                <h1>What you typed is { this.state.value }.</h1>
                <input type="text" value={ this.state.value } onChange={ (e) => {
                    var target = e.target as HTMLInputElement
                    this.setState({value: target.value });
                } } />
            </div>
        );
    }
}
