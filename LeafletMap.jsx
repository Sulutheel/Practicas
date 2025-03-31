import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Required for proper rendering
import style from '../components/LeafletMap.module.css'


function LeafletMap() {
 
const position = [43.315238585264154, -1.9906867941271458];
const positionCasa = [43.33823644919169, -1.7912901504824235]


return (
    <div className={style.divContainer}>
      <h1>Leaflet Mapa</h1>
      <MapContainer
        center={[43.31458286118951, -1.99170603259654]} // Coordinadas de Madrid, España
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
        <Popup>
            Aqui estas
        </Popup>
        </Marker>
      </MapContainer>
      <p>Casa</p>
      <MapContainer
        center={[43.33823644919169, -1.7912901504824235]} // Coordinadas de Madrid, España
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={positionCasa}>
        <Popup>
            Casa
        </Popup>
        </Marker>
        
      </MapContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M287.6 54.2c-10.8-2.2-22.1-3.3-33.5-3.6V32.4c78.1 2.2 146.1 44 184.6 106.6l-15.8 9.1c-6.1-9.7-12.7-18.8-20.2-27.1l-18 15.5c-26-29.6-61.4-50.7-101.9-58.4l4.8-23.9zM53.4 322.4l23-7.7c-6.4-18.3-10-38.2-10-58.7s3.3-40.4 9.7-58.7l-22.7-7.7c3.6-10.8 8.3-21.3 13.6-31l-15.8-9.1C34 181 24.1 217.5 24.1 256s10 75 27.1 106.6l15.8-9.1c-5.3-10-9.7-20.3-13.6-31.1zM213.1 434c-40.4-8-75.8-29.1-101.9-58.7l-18 15.8c-7.5-8.6-14.4-17.7-20.2-27.4l-16 9.4c38.5 62.3 106.8 104.3 184.9 106.6v-18.3c-11.3-.3-22.7-1.7-33.5-3.6l4.7-23.8zM93.3 120.9l18 15.5c26-29.6 61.4-50.7 101.9-58.4l-4.7-23.8c10.8-2.2 22.1-3.3 33.5-3.6V32.4C163.9 34.6 95.9 76.4 57.4 139l15.8 9.1c6-9.7 12.6-18.9 20.1-27.2zm309.4 270.2l-18-15.8c-26 29.6-61.4 50.7-101.9 58.7l4.7 23.8c-10.8 1.9-22.1 3.3-33.5 3.6v18.3c78.1-2.2 146.4-44.3 184.9-106.6l-16.1-9.4c-5.7 9.7-12.6 18.8-20.1 27.4zM496 256c0 137-111 248-248 248S0 393 0 256 111 8 248 8s248 111 248 248zm-12.2 0c0-130.1-105.7-235.8-235.8-235.8S12.2 125.9 12.2 256 117.9 491.8 248 491.8 483.8 386.1 483.8 256zm-39-106.6l-15.8 9.1c5.3 9.7 10 20.2 13.6 31l-22.7 7.7c6.4 18.3 9.7 38.2 9.7 58.7s-3.6 40.4-10 58.7l23 7.7c-3.9 10.8-8.3 21-13.6 31l15.8 9.1C462 331 471.9 294.5 471.9 256s-9.9-75-27.1-106.6zm-183 177.7c16.3-3.3 30.4-11.6 40.7-23.5l51.2 44.8c11.9-13.6 21.3-29.3 27.1-46.8l-64.2-22.1c2.5-7.5 3.9-15.2 3.9-23.5s-1.4-16.1-3.9-23.5l64.5-22.1c-6.1-17.4-15.5-33.2-27.4-46.8l-51.2 44.8c-10.2-11.9-24.4-20.5-40.7-23.8l13.3-66.4c-8.6-1.9-17.7-2.8-27.1-2.8-9.4 0-18.5 .8-27.1 2.8l13.3 66.4c-16.3 3.3-30.4 11.9-40.7 23.8l-51.2-44.8c-11.9 13.6-21.3 29.3-27.4 46.8l64.5 22.1c-2.5 7.5-3.9 15.2-3.9 23.5s1.4 16.1 3.9 23.5l-64.2 22.1c5.8 17.4 15.2 33.2 27.1 46.8l51.2-44.8c10.2 11.9 24.4 20.2 40.7 23.5l-13.3 66.7c8.6 1.7 17.7 2.8 27.1 2.8 9.4 0 18.5-1.1 27.1-2.8l-13.3-66.7z"/></svg>
        <svg width="221" height="306" viewBox="0 0 221 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Light Group" className={style.lightGroup}>
            <path id="Light 1" opacity="0.8" d="M110.5 119L149.904 192.5H71.0958L110.5 119Z"/>
            </g>
            <g id="Dark Group" className={style.darkGroup}>
            <path id="Dark 2" opacity="0.8" d="M111.404 195L150.808 268.5C143.759 267.017 111.229 267.972 72 268.5L111.404 195Z" />
            <path id="Dark 1" opacity="0.8" d="M110.5 44L149.904 117.5H71.0958L110.5 44Z" />
            </g>
        </svg>
        <svg width="254" height="261" viewBox="0 0 254 261" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="starGroup" className={style.starGroup}>
<path id="Star 1" d="M127 0L155.513 90.1733H247.784L173.135 145.903L201.649 236.077L127 180.347L52.3513 236.077L80.8645 145.903L6.21582 90.1733H98.4867L127 0Z" />
</g>
<g id="irisGroup">
<ellipse id="Ellipse 1" cx="128" cy="131.5" rx="46" ry="45.5" fill="#F5F5F5"/>
</g>
<g id="parpadoGroup">
<ellipse id="Ellipse 2" cx="128" cy="129.5" rx="37" ry="29.5" fill="#040404"/>
<ellipse id="Ellipse 3" cx="128.5" cy="130" rx="31.5" ry="19" fill="#F5F5F5"/>
</g>
<g id="ojoGroup">
<ellipse id="Ellipse 4" cx="127" cy="130" rx="13" ry="14" fill="#1A1717"/>
<ellipse id="Ellipse 5" cx="132" cy="124.5" rx="4" ry="6.5" fill="#F5F5F5"/>
</g>
</svg>
    </div>
    
  );
}

export default LeafletMap;