/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import iconUrl from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import '../../../node_modules/leaflet/dist/leaflet.css';

type Props = {
  latitude: number;
  longitude: number;
  zoom: number;
  markerLatitude?: number;
  markerLongitude?: number;
};

const Map = (props: Props): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { latitude, longitude, zoom, markerLatitude, markerLongitude } = props;
  const layerAddress = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const layerSettings = {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  };
  const iconSettings = {
    iconUrl,
  };

  useEffect(() => {
    if (mapRef.current) {
      const map = leaflet.map(mapRef.current);
      const icon = leaflet.icon(iconSettings);
      map.setView([latitude, longitude], zoom);
      leaflet.tileLayer(layerAddress, layerSettings).addTo(map);
      if (markerLatitude && markerLongitude) {
        leaflet.marker([markerLatitude, markerLongitude], { icon }).addTo(map);
      }
    }
  }, []);

  return <div className="map" ref={mapRef} />;
};

export default Map;
