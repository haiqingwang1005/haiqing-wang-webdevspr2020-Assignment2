import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Container } from "reactstrap";
import '../styles/app.css';

/**
 * The about page
 */
export default class About extends React.Component {
    render() {
        return (
                <Container >
                    <Card>
                        <CardBody>
                            <CardImg variant="top" src="/alphabet.png"  />
                            <CardTitle className={"text-center aboutTitle"}>Game Rules</CardTitle>
                            <CardText className={"text-left"}>
                                <p>
                                    Guess the right password among the given words list! You have 4 times to guess.
                                    If you guess the right password, within 4 times, you win! Otherwise you lose.
                                    On each incorrect guess the computer will indicate how many letter positions are correct. </p>
                                <p>
                                    For example, if the password is DANCE and the player guesses DENSE,
                                    the game will indicate that 4 out of 5 positions are correct (D_NCE).
                                    Likewise, if the password is HOPEFUL and the player guesses DANCING,
                                    the game will report 0/7 because while some of the letters match, they're in the wrong position.
                                </p>
                            </CardText>
                            <Button href="/home" variant="primary" >Go Home</Button>
                        </CardBody>
                    </Card>
                </Container>
        );
    }
}