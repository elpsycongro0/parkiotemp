import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//import {MarkerIcon} from './Icon.js';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

/*const CustomMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}*/

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class Mapa extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: { lat: -16.399, lng: -71.536 },
            zoom: 17,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({ currentLocation: e.latlng });
    }

    render() {
        const { currentLocation, zoom } = this.state;

        /*return (
            <MapContainer center={currentLocation} zoom={zoom} onClick={this.handleClick}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors" />
                <CustomMarker position={currentLocation} icon={MarkerIcon} >
                    <Popup><pre>{"Latitude: "+ currentLocation.lat.toFixed(2) + ", Longitude: "+ currentLocation.lng.toFixed(2)}</pre></Popup>
                </CustomMarker>
            </MapContainer>
        );*/
        return (
            <MapContainer center={currentLocation} zoom={zoom} onClick={this.handleClick}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors" />
                <Marker position={currentLocation}>
                    <Popup>Latitud <br /> Longitud</Popup>
                </Marker>
            </MapContainer>
        );
    }

}

export default Mapa;