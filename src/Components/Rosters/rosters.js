import React, { Component } from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
class Main extends Component {
    state = {
        result: [],
        awayBatters: [],
        homeBatters: []
    }


    componentDidMount = () => {
        axios.get('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
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
                <ReactBootstrap.Container>
                    <ReactBootstrap.Row>


                        {this.state.homeBatters.map(homes => {
                            return (

                                <p>{homes.display_name}</p>
                            )
                        })}
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row>


                        {this.state.awayBatters.map(away => {
                            return (

                                <p>{away.display_name}</p>
                            )
                        })}
                    </ReactBootstrap.Row>
                </ReactBootstrap.Container>




            </div>
        )
    }
}
export default Main