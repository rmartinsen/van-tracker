import React from "react";
import { connect } from "react-redux";
import Blurb from "./Blurb.jsx";

class BlurbList extends React.Component{
    render() {
        const blurbs = this.props.markers.map( data => {
            return <Blurb key= {"blurb_" + data.markerId}
                          title={ data.title }
                          description={ data.description } 
                    />
        })

        return (
            <div>
                <h2>Here are some blurbs</h2>
                { blurbs }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        markers: state.markers,
        selectedMarkerId: state.selectedMarkerId
    };
}

export default connect(mapStateToProps, null)(BlurbList);