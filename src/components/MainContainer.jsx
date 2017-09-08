import React from "react";
import VanMap from "./VanMap.jsx";
import BlurbList from "./BlurbList.jsx";

export default class MainContainer extends React.Component {

    render() {
       return(
            <div>
                <h1>Vans and stuff</h1>        
                <VanMap />
                <BlurbList />
            </div>
        )
    }
}