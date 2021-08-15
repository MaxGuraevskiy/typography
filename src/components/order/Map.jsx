import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const coordinates = [
  [55.769545, 37.606613]
];

const mapData = {
  center: coordinates[0],
  zoom: 15,
};

const Map = () => (
  <div id="map">
    <YMaps className="yandex-map">
      <YMap className="yandex-map" defaultState={mapData}>
        {coordinates.map(x => <Placemark geometry={x} />)}
      </YMap>
    </YMaps>
  </div>)

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current.coordinates);
  return { coordinates: current.coordinates }
}

export default connect(mapStateToProps, null)(Map);