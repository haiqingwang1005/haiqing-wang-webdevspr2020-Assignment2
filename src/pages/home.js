import React from "react";
import Image from 'react-bootstrap/Image'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
import Menu from "../widgets/menu";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShowModal: false
        };
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Card>
                        <CardBody>
                            <Jumbotron>
                                <Container>
                                    <h1>Let's Guess Password!</h1>
                                    <p>
                                        A funny game
                                    </p>
                                </Container>
                            </Jumbotron>
                            <Container fluid>
                                <Row className="justify-content-center">
                                    <Col sm={6}>
                                        <Image src="wood_cube.jpg" rounded fluid />
                                    </Col>
                                    <Col sm={6}>
                                        <Menu/>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}

