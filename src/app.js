import React from "react";
import CounterShower from "./counterShower";
import CounterInput from "./counterInput";
import './styles/app.css';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    render() {
        return ((
            <div>
                <h1>{"Let's Have Fun With Redux"}</h1>
                <h2>{"Use the form below to add to the total"}</h2>
                <CounterInput/>
                <CounterShower/>
                <div className={"stickyHeader"}><h1>{"I'M A HEADER"}</h1></div>
                <p className={"textualNonsense"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet vel mi ut accumsan.
                    Suspendisse tempus laoreet neque et blandit. Duis ut cursus metus. Nullam ac est ultrices, euismod
                    lorem id, scelerisque nibh. Vestibulum tincidunt malesuada lorem, at tempor diam pulvinar ut. Morbi
                    vitae ligula urna. Cras sed augue vel nunc euismod venenatis. Fusce felis nisl, auctor non lobortis
                    eu, pretium vel urna.
                </p>
                <p className={"textualNonsense"}>
                    Nam fermentum est vitae massa condimentum, sed ultrices justo mattis. Maecenas ex nunc, semper quis
                    vulputate sit amet, condimentum ut diam. Praesent interdum sodales tempor. Phasellus augue leo,
                    euismod
                    quis dignissim vel, dignissim in dolor. Morbi sed arcu dolor. Duis aliquet, tortor nec pretium
                    blandit,
                    magna lorem varius orci, eu eleifend libero arcu ac urna. Vivamus porta vestibulum varius. Nulla
                    aliquet, est ac ullamcorper rutrum, diam elit hendrerit lectus, ac luctus felis nulla nec leo. Donec
                    congue imperdiet augue, in hendrerit libero convallis non.
                </p>
                <p className={"textualNonsense"}>
                    Vestibulum vehicula efficitur porta. Nam tempus, nulla at rutrum molestie, ante est placerat urna,
                    et
                    commodo lacus risus eu eros. Sed rhoncus elementum tellus eget ullamcorper. Donec nisi nibh, laoreet
                    vel
                    magna non, elementum efficitur quam. Pellentesque placerat finibus risus sed vulputate. Aenean
                    elementum
                    erat eget turpis accumsan, sed efficitur mauris aliquam. Fusce lacinia leo et luctus suscipit.
                    Aenean
                    nunc massa, viverra vel elit a, venenatis elementum tellus. Donec volutpat nisi quam, in mollis
                    purus
                    vulputate eu. Donec lacinia ligula non lectus congue, ut lobortis lorem pellentesque. Pellentesque
                    egestas ut lectus sit amet cursus. Quisque congue ac quam at rutrum. Cras non feugiat tellus, luctus
                    ultricies mi. Sed malesuada turpis vel efficitur condimentum. Duis viverra eu odio in ultrices.
                </p>
                <p className={"textualNonsense"}>

                    Praesent sed orci diam. Maecenas suscipit gravida quam, ac tempor turpis efficitur et. Donec
                    dignissim
                    eleifend felis nec consectetur. In dignissim posuere elit vitae elementum. Morbi porta dui nibh, eu
                    venenatis ante varius sit amet. Fusce ac leo luctus, blandit orci vel, pulvinar odio. Morbi risus
                    tellus, consequat a sapien at, facilisis sagittis massa. Fusce scelerisque dui diam, eget cursus
                    ipsum
                    scelerisque eu. Sed sodales imperdiet urna, ut interdum purus tincidunt nec.
                </p>
                <p className={"textualNonsense"}>

                    Vestibulum interdum dui eget fermentum pulvinar. Duis egestas ultrices nisl, at molestie risus
                    tincidunt
                    a. Ut pellentesque, velit sit amet interdum euismod, ante metus vestibulum augue, hendrerit ultrices
                    tellus est vel metus. Nam ut faucibus eros. Nam venenatis eget velit at bibendum. Donec sollicitudin
                    auctor turpis, in fermentum felis porttitor sit amet. Suspendisse est dui, porttitor vel eleifend
                    ut,
                    efficitur at justo. Mauris varius, felis nec malesuada commodo, velit turpis tempor nulla, at
                    hendrerit
                    purus libero nec turpis. In ac lectus nec odio egestas tristique a ac elit. Nunc quam sapien, cursus
                    ut
                    accumsan nec, sodales at nulla. Curabitur urna tortor, ullamcorper a sagittis non, tincidunt in sem.
                    Donec vel nisl leo. Pellentesque eleifend turpis odio, id ornare arcu venenatis at. Morbi interdum
                    ultrices elit ac hendrerit.
                </p>
                <div>
                    <Button color="primary">Primarily Primary</Button>{' '}
                </div>
                <div>
                    <Button color="danger">I'm in danger.</Button>
                </div>
                <button type="button" className="btn btn-primary">Primary</button>

            </div>
        ));
    }
}