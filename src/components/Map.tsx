import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {useMap} from 'react-leaflet/hooks'
import {LatLngExpression} from "leaflet";
import 'leaflet/dist/leaflet.css'

import {IState} from "../features/location/getLocationSlice.ts";
import styled from "styled-components";
import {getLocationByIp} from "../features/location/locationAction.ts";
import axios from "axios";

const StyledMapContainer = styled(MapContainer)`
  height:  ${window.innerHeight - 250}px;
  z-index: 1;
`;


interface IPosition {
    center: LatLngExpression;
    zoom: number
}

function ChangeView({center, zoom}: IPosition) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function Map() {
    const dispatch = useDispatch()
    const {data} = useSelector((state: Record<string, IState>) => state.location);
    const [position, setPosition] = useState<LatLngExpression>({lat: 98.699739, lng: 52.338097})

    const resCur = async() => {
        const response = await axios.get('https://api.ipify.org?format=json')
         // @ts-ignore
         dispatch(getLocationByIp(response.data.ip))
    }

    useEffect(() => {
           resCur()
    }, [])

    useEffect(() => {
        if (data) {
            setPosition([data.lat, data.lon]);
        }
    }, [data]);

    return (
        <>
            <StyledMapContainer  center={position} zoom={14} scrollWheelZoom={true}>
                <ChangeView center={position} zoom={14}/>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}/>
            </StyledMapContainer>
        </>

    );
}

export default Map;