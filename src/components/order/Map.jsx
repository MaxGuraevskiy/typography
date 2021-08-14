import React from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.769545, 37.606613],
  zoom: 15,
};

const coordinates = [
  [55.769545, 37.606613]
];

const Map = () => {
  return (<div id="map">
    <YMaps className="yandex-map">
      <YMap defaultState={mapData} className="yandex-map">
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
      </YMap>
    </YMaps>
  </div>);
}

export default Map;