import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

class ScoreButton extends Component {
    render() { 
        return ( <div>
            <Button variant="info" score={this.props.score}>Score: {this.props.score}</Button>
        </div> );
    }
}
 
export default ScoreButton;