'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet default icon issues in Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    address?: string;
  }>;
}

export default function FreeMap({ center, zoom = 13, markers = [] }: MapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-gray-100 animate-pulse rounded-2xl" />;

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={false}
      className="w-full h-full rounded-2xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>
            <div className="font-sans">
              <p className="font-bold text-gray-900">{marker.title}</p>
              {marker.address && <p className="text-gray-600 text-sm mt-1">{marker.address}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
