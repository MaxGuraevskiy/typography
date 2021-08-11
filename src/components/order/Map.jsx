import React from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.769545, 37.606613]
];

const Map = () => {
  return (<div id="map">
    <YMaps>
      <YMap defaultState={mapData} className="">
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
      </YMap>
    </YMaps>
  </div>);
}

export default Map;