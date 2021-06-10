import React, {useState, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//import {MarkerIcon} from './Icon.js';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class Mapa extends React.Component{

    render() {
        const {eventHandlers, currentPosition, zoom, markerRef} = this.props;

        return (
            <MapContainer center={currentPosition} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors" />
                <Marker position={currentPosition} draggable={true} eventHandlers={eventHandlers} ref={markerRef}>
                    <Popup>{"Latitud: "+currentPosition.lat.toFixed(3)}<br /> {"Longitud: "+currentPosition.lng.toFixed(3)}</Popup>
                </Marker>
            </MapContainer>
        );
    }

}


function MapWithDragMarker(){
  const center={lat: -16.399,lng: -71.536}
  const zoom=17;
  const markerRef = useRef(null)
  const [position, setPosition] = useState(center)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),[],)

  return (
    <Mapa eventHandlers={eventHandlers} currentPosition={position} zoom={zoom} markerRef={markerRef}/>
  )
}

export default MapWithDragMarker;