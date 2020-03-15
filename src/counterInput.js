import React from "react";
import { connect } from "react-redux"
import addSum from "./action/sumAction";

class CounterInput extends React.Component {
    render() {
        let input;
        return (
            <div>
                <input onChange={ (event) => {
                    input = parseInt(event.target.value);
                }} type = {"number"}/>
                <button onClick={ () => {
                    this.props.onClick(input);
                }}>{"Add"}</button>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
      onClick: (val) => {
          console.log('ja');
          dispatch(addSum(val));
      }
  }
};

let mapStateToProps = (state, props) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterInput)