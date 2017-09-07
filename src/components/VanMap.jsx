import React from "react";
import { Map, TileLayer } from "react-leaflet";

import { selectMarker } from "../actions/VanActions.js";
import { VanMarker } from "./VanMarker.jsx";

const mapUrl = "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const mapCenter = [53.439279, -113.618731];
const zoomLevel = 3;

export default class VanMap extends React.Component {

    render() {
        if (!this.props) {
            return null;
        }
        debugger;
        const markers = this.props.markers.map( (data) => {
            return <Marker markerId = { data.markerId }
                           latlong = { [data.latitude, data.longitude ] }
                           />
        })
        return (
            <div>
                <Map center={mapCenter}
                     zoom={zoomLevel}
                     id="map-container">
                    <TileLayer url={mapUrl} />
                </Map>
            </div>
        );
    }
}