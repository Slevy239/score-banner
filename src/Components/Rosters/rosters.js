import React, { Component } from 'react';
import axios from 'axios';
class Main extends Component {
    state = {
        result: [],
        awayBatters: [],
        homeBatters: [],
        homeField: '',
        awayField: ''
    }


    componentDidMount = () => {
        axios.get('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
        this.setState({ homeField: localStorage.getItem('homeRoster') })
        this.setState({ awayField: localStorage.getItem('awayRoster') })
        console.log(this.state)

    }
    displayRes = (data) => {
        this.setState({ awayBatters: data.away_batters })
        this.setState({ homeBatters: data.home_batters })
        console.log(this.state.awayBatters)
        console.log(this.state.homeBatters)
    }

    render() {
        return (
            <div>
               
            </div>
        )
    }
}
export default Main