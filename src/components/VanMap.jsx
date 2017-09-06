import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [38.5816, -121.4944];
const zoomLevel = 5;

export default class VanMap extends React.Component {
    buttonClick() {
    }

    render() {
        const vanIcon = L.icon({
            iconUrl: "van.png",
            iconSize: [40, 40]
        })

        return (
            <div>
                <Map center={mapCenter}
                     zoom={zoomLevel}
                     id="map-container">
                    <TileLayer attribution={stamenTonerAttr}
                               url={stamenTonerTiles} />
                    <Marker position={mapCenter} 
                            icon={ vanIcon }/>
                </Map>
                <button onClick={ () => this.buttonClick() }>
                    button
                </button>
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