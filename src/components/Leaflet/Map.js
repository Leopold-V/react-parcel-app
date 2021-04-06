import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle,
	useMapEvents, Tooltip, LayersControl
} from 'react-leaflet';


const LocationMarker = ({position, setPosition}) => {
  const map = useMapEvents({
    click(e) {
			setPosition(e.latlng);
      map.locate();
    },
    locationfound() {
      map.flyTo(position, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Tooltip>Home</Tooltip>
    </Marker>
  )
}

export const Map = () => {
	const [position, setPosition] = useState([46.977, -0.838])

	return (
		<MapContainer style={{width: '100%', height: '100%'}} center={position} zoom={12} >
			<LayersControl position="topright">
				<LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer >
				<LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="Cycling">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
						url="http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>

				<LayersControl.Overlay checked name="Covid 10km radius">
					<Circle center={position} pathOptions={noFillBlueOptions} radius={10000} />
      	</LayersControl.Overlay>
			</LayersControl>
			<LocationMarker position={position} setPosition={setPosition} />
		</MapContainer>
	)
};

const noFillBlueOptions = { fillColor: 'transparent' }