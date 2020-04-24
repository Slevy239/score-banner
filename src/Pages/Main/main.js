import React, { Component } from 'react';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
    state = {
        result: [],
        homeTeamInfo: '',
        awayTeamInfo: '',
        homeScores: '',
        awayScores: '',
        away_batter_totals: '',
        home_batter_totals: ''

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
        this.setState({ homeTeamInfo: data.home_team })
        this.setState({ awayTeamInfo: data.away_team })
        this.setState({ homeScores: data.home_period_scores })
        this.setState({ awayScores: data.away_period_scores })
        this.setState({ away_batter_totals: data.away_batter_totals })
        this.setState({ home_batter_totals: data.home_batter_totals })

        console.log(typeof this.state.awayScores)


        console.log(this.state.result.away_team.first_name)
    }

    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell><p>1</p></TableCell>
                                <TableCell><p>2</p></TableCell>
                                <TableCell><p>3</p></TableCell>
                                <TableCell><p>4</p></TableCell>
                                <TableCell><p>5</p></TableCell>
                                <TableCell><p>6</p></TableCell>
                                <TableCell><p>7</p></TableCell>
                                <TableCell><p>8</p></TableCell>
                                <TableCell><p>9</p></TableCell>
                                <TableCell><strong><p>R</p></strong></TableCell>
                                <TableCell><strong><p>R</p></strong></TableCell>
                                <TableCell><strong><p>E</p></strong></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{this.state.homeTeamInfo.abbreviation}</TableCell>
                                {Object.keys(this.state.homeScores).map((el, i) => (
                                    <TableCell key={i}>{el}</TableCell>
                                ))}
                                <TableCell><strong>{this.state.home_batter_totals.runs}</strong></TableCell>
                                <TableCell><strong>{this.state.home_batter_totals.hits}</strong></TableCell>
                                <TableCell><strong>{this.state.result.home_errors}</strong></TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>{this.state.awayTeamInfo.abbreviation}</TableCell>
                                {Object.keys(this.state.awayScores).map((el, i) => (
                                    <TableCell key={i}>{el}</TableCell>
                                ))}
                                <TableCell><strong>{this.state.away_batter_totals.runs}</strong></TableCell>
                                <TableCell><strong>{this.state.away_batter_totals.hits}</strong></TableCell>
                                <TableCell><strong>{this.state.result.away_errors}</strong></TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell align='center'>{this.state.homeTeamInfo.last_name}</TableCell>
                                <TableCell align='center'>Inning</TableCell>
                                <TableCell align='center'>{this.state.awayTeamInfo.last_name}</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default Main