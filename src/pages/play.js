import React from "react";
import {useParams} from "react-router-dom";
import PlayBoard from "../widgets/playBoard";

/**
 * The play page
 *
 * his page is used to handle the url parameters.
 * I have to decouple the PlayBoard into another Component, as the React doesn't allow changing one component from
 * other components.
 */
export default function(props) {

    let params = useParams();
    let level = parseInt(params.level);


    return (
        <div>
            <div>
                <PlayBoard level={level}/>
            </div>
        </div>
    );
}
