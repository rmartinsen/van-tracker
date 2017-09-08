
import React from "react";

export default class Blurb extends React.Component {
    render() {
        if (!this.props) {
            return <div></div>
        }

        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p>{ this.props.description }</p>
            </div>
        )
    }
}