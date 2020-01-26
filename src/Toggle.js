import React from 'react';
import './Toggle.css';


class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            theme: 'Light/Dark'
        }
    }

    render() {
        let className = 'light';
        if (this.state.checked) {
            className = 'not-light'
        }
        return (
            <div className="toggle">
                <span className={className}>TEST </span>
                <label className="switch">
                    <input 
                        type="checkbox"
                        name="css-selector"
                        value={this.state.checked}
                        onChange={() => this.setState({ checked: !this.state.checked }) + console.log(this.state.checked)}
                    />
                    <span className="slider round"></span>
                    <p className="toggle-text">{this.state.theme}</p>
                </label>
            </div>
        )
    }
}

export default Toggle;
