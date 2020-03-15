import {Button, Card, CardBody, CardFooter, CardTitle, Input} from "reactstrap";
import React from "react";
import {connect} from "react-redux";
import guessAWord from "../action/guessAction";

/**
 * User input area on the game board.
 */
class GameInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputWord = React.createRef();
    }
    render () {
        const leftTimes = this.props.leftTimes;
        const target = this.props.targetWord;

        return (
            <Card>
                <CardTitle>
                    <CardTitle className={"text-center listTitle"}>Guess ({leftTimes} left)</CardTitle>
                </CardTitle>
                <CardBody>
                    <div className={"inputTitle"}>Guess the word: </div>
                    <Input innerRef={this.inputWord} disabled={this.props.success || this.props.lose}/>
                </CardBody>
                <CardFooter>
                    <Button color={"primary"}
                            disabled={this.props.success || this.props.lose}
                            onClick={() => {this.props.onGuess(this.inputWord.current.value, target)}} >
                        Try it!
                    </Button>{' '}
                    <Button href={"/home"}>Go Home</Button>
                </CardFooter>
            </Card>
        );
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onGuess: (val, target) => {
            if (val.length !== target.length) {
                alert(`You should input words with length ${target.length}`);
                return;
            }
            dispatch(guessAWord(val));
        }
    };
};

let mapStateToProps = (state, props) => {
    return {
        leftTimes: state.guess.leftTimes,
        targetWord: state.guess.targetWord,
        success: state.guess.success,
        lose: state.guess.lose
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameInput);