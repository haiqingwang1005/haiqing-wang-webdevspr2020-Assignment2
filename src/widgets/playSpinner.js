import React from "react";
import {Col, Container, Row, Spinner} from "reactstrap";
import "../styles/app.css"

/**
 * A spinner indicating UI loading.
 */
export default class PlaySpinner extends React.Component {
    render() {
        return (
            <Container>
                <Row className={"playSpinner"}>
                    <Col xs={{size: 6, offset: 5}} sm={{ size: 6, offset: 6 }}>
                        <Spinner color="primary" />
                    </Col>

                </Row>
            </Container>
        );
    }
}