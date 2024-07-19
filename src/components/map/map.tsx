import { useEffect, useRef } from 'react';
import useMap from '../hooks/use-map';
import { City, Offer } from '../../types/offer';
import { UrlMarkers } from '../../const';
import { Icon, layerGroup, Marker } from 'leaflet';

type MapProps = {
  city: City;
  points: Offer[];
  selectedOffer: Offer | undefined;
}

function Map({city, points, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
            selectedOffer !== undefined && point.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedOffer]);

  return (
    <div
      style={{
        height: '100%'
      }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
