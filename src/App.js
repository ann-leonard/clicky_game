import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Jumbo from './components/Jumbo'
import mugshots from "./images/mugshots"
import Container from "react-bootstrap/Container"
import PictureCard from './components/pictureBox'
import CardGroup from 'react-bootstrap/CardGroup';
//import ScoreButton from './components/score'


class App extends Component {
    state = {
        mugshots,
        currentID: 0,
        clickedMugshots: [0],
        score: 0,
        winScore: 9
    }

    randomShuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        };

        return array;
    };

    handleClick = event => {
       // console.log("clicky")
        let id = event.target.id;
        this.setState({currentID:id}, this.checkWin)
    }

    checkWin = (id) => {
        const {clickedMugshots, currentID} = this.state;
        console.log(clickedMugshots)

        if (clickedMugshots.includes(currentID)){
         //   alert("You lose!")
            this.setState({
                score:0,
                clickedMugshots:[]
            })
        }else{
        //    console.log("win")
            var joined = this.state.clickedMugshots;
            joined.push(currentID)
            this.setState({
                score: this.state.score+1,
                clickedMugshots: joined
            }, ()=>{
                if (clickedMugshots.length === 9){
                    alert("You win!")
                }
            })
            console.log(this.state.score)
            console.log(`mugs length: ${this.state.clickedMugshots.length}`)
        }
    }

    render() {
        return (<div>
            <Jumbo score={this.state.score}></Jumbo>
            <Container>
                <CardGroup className="ml-5">
                    {this.state.mugshots.map(mugshot => (
                        <PictureCard
                            id={mugshot.id}
                            src={mugshot.src}
                            handleClick={this.handleClick}
                        />
                    ))}
                </CardGroup>
            </Container>
        </div>);
    }
}

export default App;