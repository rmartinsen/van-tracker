
import { Component } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default class VanMarker extends Component {

    selectMarker(markerId) {
        this.props.selectMarker(markerId);
    }

    render() {
        const markerId = this.props.markerId;

        const vanIcon = L.icon({
            iconUrl: "van.png",
            iconSize: [40, 40]
        })

        return (
            <div>
                <Marker position={ this.props.latlong } 
                icon={ vanIcon }
                onclick={ () => this.selectMarker(markerId) }/>
            </div>
        )
    }
}