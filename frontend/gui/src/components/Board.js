import React, {Component} from 'react'
import Square from './Square'

class Board extends Component {

    renderSquares(i, j){
        if (j.index < this.props.level) {
            return(
                <div className='border-row'>
                    <Square value={this.props.list1[j.index]} />
                    <Square value={this.props.list2[j.index]} />
                </div>
            ) 
        } else {
            return(
                <div className='border-row'>
                    <Square value='XX' onClick={() => this.props.onClick(j.index, 0)} />
                    <Square value='XX' onClick={() => this.props.onClick(j.index, 1)} />
                </div>
            ) 
        }
    }    

    render() {
        return(
            <div className='border-row'>
                {
                    this.props.list1.map((listItem, index) => this.renderSquares({listItem}, {index}))
                }
            </div>
            
        )
    }
}

export default Board