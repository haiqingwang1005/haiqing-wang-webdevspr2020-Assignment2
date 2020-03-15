import React from "react";
import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Container, Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import chooseDifficulty from "../action/difficultyAction";
import {connect} from "react-redux";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowModal: false
        };
    }

    render() {

        let { shouldShowModal } = this.state;
        let choose = this.props.difficulty.choose;
        let save = this.props.difficulty.save;

        const badgeColor = ["success", "primary", "secondary", "warning", "danger"];
        const difficultyStr = ["Very Easy", "Easy", "Average", "Hard", "Very Hard"];


        // I have to use the listener function inside the Component rather than that from reducer to toggle the Modal.
        // Because from React 16.13.0, it will throw 'Cannot update a component from inside the function body of a different component'
        // https://github.com/facebook/react/issues/18178
        const cancelModal = () => this.setState({
            shouldShowModal: false
        });

        const saveModal = (value) => {
            this.setState({
                shouldShowModal: false,
            });
            this.props.onSaveDifficulty(value);
        };

        const showModal = () => this.setState({
            shouldShowModal: true
        });

        return (
            <div>
                <Card>
                    <CardTitle className={"text-center aboutTitle"}>
                        Menu
                    </CardTitle>
                    <CardBody>
                        <Button color={"primary"} block href={"/play/" + save}>Start</Button>
                        <Button color={"secondary"} onClick={showModal} block>Select Difficulty</Button>
                        <Button color={"info"} href={"/about"} block>Learn more about rules</Button>
                        <Container className={"difficultyContent"}>
                            Difficulty: <Badge color={badgeColor[save]}>{difficultyStr[save]}</Badge>
                        </Container>
                    </CardBody>
                </Card>
                <Modal isOpen={shouldShowModal} toggle={cancelModal}>
                    <ModalHeader toggle={cancelModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <ButtonGroup>
                            <Button color={"success"} onClick={() => this.props.onChooseDifficulty(0)}>Very Easy</Button>
                            <Button color={"primary"} onClick={() => this.props.onChooseDifficulty(1)}>Easy</Button>
                            <Button color={"secondary"} onClick={() => this.props.onChooseDifficulty(2)}>Average</Button>
                            <Button color={"warning"} onClick={() => this.props.onChooseDifficulty(3)}>Hard</Button>
                            <Button color={"danger"} onClick={() => this.props.onChooseDifficulty(4)}>Very Hard</Button>
                        </ButtonGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => saveModal(choose)}>Ok</Button>{' '}
                        <Button color="secondary" onClick={cancelModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onChooseDifficulty: (val) => {
            dispatch(chooseDifficulty(val));
        },

        onSaveDifficulty: (val) => {
            dispatch(chooseDifficulty(val, true));
        },
    };
};

let mapStateToProps = (state, props) => {
    return {
        difficulty: state.difficulty,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
