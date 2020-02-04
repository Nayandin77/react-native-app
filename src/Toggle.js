import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { checked: true }
    }

    render() {
        return (
            <div className="toggle">
                <button 
                    className={this.state.checked && 'checked'}
                    onClick={ () => this.setState({checked: !this.state.checked})}>
                Test
                </button>
              </div>
        )
    }
}

export default Toggle;
