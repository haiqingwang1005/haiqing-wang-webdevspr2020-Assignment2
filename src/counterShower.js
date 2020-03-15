import React from "react";
import { connect } from "react-redux"

class CounterShower extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.total }</h1>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
    };
};

let mapStateToProps = (state, props) => {
    return {
        total: state.sum
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterShower);