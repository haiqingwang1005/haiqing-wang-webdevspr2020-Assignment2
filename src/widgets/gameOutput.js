import {connect} from "react-redux";
import React from "react";
import {Card, CardBody, ListGroupItem} from "reactstrap";

/**
 * The area that show user's play history.
 */
class GameOutput extends React.Component {

    renderHistoryResult() {

        const history = [];

        for (let i = 0; i < this.props.guessedWords.length; i++) {
            history.push({
                word: this.props.guessedWords[i],
                correctness: this.props.correctness[i]
            });
        }
        let id = 0;
        return history.map((item) => {
            id += 1;
            return (
                <ListGroupItem key={id} className={"text-center"}>
                    <div>User input: {item.word}</div>
                    <div>{item.correctness}</div>
                </ListGroupItem>
            );}
        );
    }

    renderWinIfNeeded() {
        if (this.props.success) {
            return (
                <div>User win!</div>
            );
        }
    }

    renderLoseIfNeeded() {
        if (this.props.lose) {
            return (
                <div>User lose!</div>
            );
        }
    }
    render() {
        return (
            <Card>
                <CardBody>
                    {this.renderHistoryResult()}
                    {this.renderWinIfNeeded()}
                    {this.renderLoseIfNeeded()}
                </CardBody>
            </Card>
        );
    }
}


let mapStateToProps = (state, props) => {
    return {
        guessedWords: state.guess.guessedWords,
        correctness: state.guess.correctness,
        success: state.guess.success,
        lose: state.guess.lose
    };
};
export default connect(mapStateToProps, null)(GameOutput);