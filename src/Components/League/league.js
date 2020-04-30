import React, { Component } from 'react';
import axios from 'axios';
class League extends Component {
    state = {
        result: [],
    }


    componentDidMount = () => {
        axios.get('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))

    }
    displayRes = (data) => {
        this.setState({ result: data })
        console.log(this.state.result.league)
    }

    render() {
        return (
            <div>
                <h1>{this.state.result.league}</h1>
            </div>
        )
    }
}
export default League