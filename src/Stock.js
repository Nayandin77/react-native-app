import React from 'react';
import Plot from 'react-plotly.js';
import './Stock.css';


class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY = "I6O5OVTBIZ5Q8MSL"; // MK8CISD8XIH0G1RQ I6O5OVTBIZ5Q8MSL
        // let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.stock}&outputsize=compact&apikey=${API_KEY}`;
        let API_CALL = 0;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                for (var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)']
                    [key]['1. open']);
                }
                pointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
            })
    }

    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: '#111111'}
                        }   
                    ]}
                    layout={{
                        width: 720,
                        height: 440,
                        title: `${this.props.stock}`,
                        paper_bgcolor: '#d8f6de',
                        plot_bgcolor: '#abd1b5'
                    }}
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                    }}
                    // onInitialized={(figure) => this.setState(figure)}
                    // onUpdate={(figure) => this.setState(figure)}
                />
            </div>
            
        )
    }
}

export default Stock;