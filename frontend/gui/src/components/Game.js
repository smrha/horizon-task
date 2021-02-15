import React, {Component} from 'react'
import Board from './Board'
import axios from 'axios'

class Game extends Component {
    constructor(props){
        super(props)

        this.state = {
            level: 0,
            choices: [],
            time_count: [],

            list1: [],
            list2: []
        }

        // this.state = {
        //     level: 0,
        //     choices: [],
        //     time_count: [],
        //     list1: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        //     list2: [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
        // }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/game/')
        .then(res => {
            this.setState({
                list1: res.data.array_1,
                list2: res.data.array_2
            })
            console.log(res.data)
        })
    }

    handleClick(i, j) {
        console.log(this.state.time_count[0])
        if (this.state.level == i) {
            if (j) {
                this.setState({
                    level: this.state.level + 1,
                    choices: this.state.choices.concat(this.state.list2[i]),
                    time_count: this.state.time_count.concat(Date.now())
                })
            } else {
                this.setState({
                    level: this.state.level + 1,
                    choices: this.state.choices.concat(this.state.list1[i]),
                    time_count: this.state.time_count.concat(Date.now())
                })
            }
            
        }
        // if (this.state.level == i) {
        //     this.setState({
        //         level: this.state.level + 1,
        //         choices: this.state.choices.concat(j),
        //         time_count: this.state.time_count.concat(Date.now())
        //     })
        // }
    }

    render() {
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board level={this.state.level}
                    list1={this.state.list1}
                    list2={this.state.list2}
                    choices={this.state.choices}
                    onClick={(i, j) => this.handleClick(i, j)}
                    />
                </div>
            </div>
        )
    }
    // render() {
    //     return(
    //         <div>
    //             {this.state.list1}
    //         </div>
    //     )
    // }
}

export default Game