import React from "react";
import {connect} from "react-redux";
import Game from "../service/game";
import PlaySpinner from "./playSpinner";
import {Container, Row, Col} from "reactstrap";
import "../styles/app.css"
import WordListView from "./wordListView";
import GameInput from "./gameInput";
import GameOutput from "./gameOutput";
import resetAction from "../action/resetAction";

class PlayBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: props.level,
            list: undefined
        };
        this.game = new Game();
    }

    componentDidMount() {
        this.game.prepareWordList(this.state.level)
            .then(data => {
                this.setState({
                    list: data
                });
                const target = this.game.pickTarget(data);
                this.props.dispatch(resetAction(target));
            });
    }

    render() {

        if (!this.state.list) {
            return (
                <PlaySpinner />
            );
        } else {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col xs="12" sm="6">
                                <WordListView list={this.state.list} />
                            </Col>
                            <Col xs="12" sm="6">
                                <GameInput/>
                                <br/>
                                <GameOutput/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

let mapStateToProps = (state, props) => {
    return {
    };
};
export default connect(mapStateToProps, null)(PlayBoard);