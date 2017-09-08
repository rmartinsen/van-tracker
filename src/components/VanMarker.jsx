
import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default class VanMarker extends React.Component {

    selectMarker(markerId) {
        console.log(markerId);
    }

    render() {
        if(!this.props || !this.props.latlong) {
            return null;
        }

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