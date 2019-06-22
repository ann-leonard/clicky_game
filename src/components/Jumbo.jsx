import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap'

export default class Jumbo extends Component {
    state = {}
    render() {
        return (
            <Jumbotron fluid className="bg-dark text-light text-center pt-4 pb-3">
                <Container>
                    <h1>Celebrity Mugshot Memory!</h1>
                    <p>
                        Don't click the same "pic of shame" twice!
                    </p>
                    <Button variant="info" score={this.props.score}>Score: {this.props.score}</Button>

                </Container>
            </Jumbotron>
        );
    }
}

