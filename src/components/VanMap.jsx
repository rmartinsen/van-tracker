import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import { selectPoint } from "../actions/VanActions.js";

const mapUrl = "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const mapCenter = [53.439279, -113.618731];
const zoomLevel = 3;

export default class VanMap extends React.Component {
    pointClick() {
        this.props.onPointClick(42);
    }

    render() {
        console.log(this.props);

        const vanIcon = L.icon({
            iconUrl: "van.png",
            iconSize: [40, 40]
        })

        return (
            <div>
                <Map center={mapCenter}
                     zoom={zoomLevel}
                     id="map-container">
                    <TileLayer url={mapUrl} />
                    <Marker position={mapCenter} 
                            icon={ vanIcon }
                            onclick={ () => this.pointClick() }/>
                </Map>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        "point": state.point
    }
};

const mapDispatchToProps = (dispatch) => {
    select_point: "poi"
}