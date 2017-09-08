import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { connect } from "react-redux";

import VanMarker from "./VanMarker.jsx";
import { addMarker, selectMarker } from "../actions/VanActions.js";

const mapUrl = "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const mapCenter = [53.439279, -113.618731];
const zoomLevel = 3;

class VanMap extends React.Component {

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
            return <VanMarker key={ "van_marker_" + data.markerId }
                              markerId={ data.markerId }
                              latlong={ [data.latitude, data.longitude ] }
                           />
        })
        
        return (
            <div>
                <Map center={mapCenter}
                     zoom={zoomLevel}
                     id="map-container">
                    <TileLayer url={mapUrl} />
                    { markers }
                </Map>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        markers: state.markers,
        selectedMarkerId: state.selectedMarkerId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMarkerClick: markerId => {
            dispatch(selectMarker(markerId));
        },
        addMarker: marker => {
            dispatch(addMarker(marker));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VanMap)