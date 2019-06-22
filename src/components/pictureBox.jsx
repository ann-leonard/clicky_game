import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import mugshots from '../images/mugshots.json'
import '../images/images.css'
//==========================================
// TODO:
// shuffle function
// check for clickedMugs before incrementing score
// add win/loss behaviours
//==========================================
class PictureCard extends Component {
    
    render() { 
        return ( 
            <div>
            
            <Card className="m-3" bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Body>
                <img 
                    src={this.props.src} 
                    id={this.props.id} 
                    alt={mugshots.name}
                    className="img"
                    onClick={this.props.handleClick}
                    />
            </Card.Body>
            </Card>
          
          </div>
         );
    }
}
 
export default PictureCard;