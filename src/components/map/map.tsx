import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { UrlMarkers } from '../../const';
import { Icon, LatLng, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Offer[];
  selectedOffer: Offer | undefined;
}

function Map({city, points, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers: Marker[] = [];

  const defaultCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_DEFAULT
  });

  const currentCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_CURRENT,
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && point.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        markers.push(marker);
      });

      return () => {
        map.removeLayer(markerLayer);
        markers.forEach((marker) => {
          marker.remove();
        });
        map.setView(new LatLng(city.location.latitude, city.location.longitude), city.location.zoom);
      };
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom, currentCustomIcon, defaultCustomIcon, map, markers, points, selectedOffer]);

  return (
    <div
      style={{
        height: '100%'
      }}
      ref={mapRef}
      data-testid='map'
    >
    </div>
  );
}

export default Map;
