import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { VanMarker } from "./VanMarker.jsx";

const mapUrl = "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const mapCenter = [53.439279, -113.618731];
const zoomLevel = 3;

export default class VanMap extends React.Component {

    componentWillMount() {
       fetch("test.json")
            .then( response => { 
                return response.json();
            }).then( data => {
                this.addMarkersToState(data);
            })
    }

    addMarkersToState(markers) {
        for(let i=0; i < markers.length; i++) {
            this.props.addMarker(markers[i]);
        }
    }

    render() {
        if (!this.props) {
            return null;
        }

        const markers = this.props.markers.map( (data) => {
            return <VanMarker markerId = { data.markerId }
                           latlong = { [data.latitude, data.longitude ] }
                           />
        })
        if (markers.length > 1) {
            debugger;
        }
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