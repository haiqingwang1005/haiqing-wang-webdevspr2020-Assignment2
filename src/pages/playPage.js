import React from "react";
import {useParams} from "react-router-dom";
import PlayBoard from "../widgets/playBoard";
export default function(props) {

    let params = useParams();
    let level = parseInt(params.level);

    // I have to decouple the PlayBoard into another Component, as the React doesn't allow changing one component from
    // other components.
    return (
        <div>
            <div>
                <PlayBoard level={level}/>
            </div>
        </div>
    );
}
