
import { Component } from "react";

export default class Blurb extends Component {
    render() {
        if (!this.props) {
            return <div></div>
        }

        const blurb = this.props.blurb;

        return (
            <div>
                <h2>{ blurb.title }</h2>
                <p>{ blurb.description }</p>
            </div>
        )
    }
}