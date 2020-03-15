import React from "react";

import {
    useParams
} from "react-router-dom";

export default function(props) {

    console.log(props);

    let params = useParams();
    let name = params.name;

    /*
     if you're feeling fancy, the above can be written as:
     let { name } = useParams();!
     */

    return (
        <div>
            <h1>Hello, {name} </h1>
        </div>
    )

}