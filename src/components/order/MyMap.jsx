import React, { useRef, useState } from 'react';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl } from 'react-yandex-maps';
import { connect } from 'react-redux';

const mapData = {
  center: [55.769545, 37.606613],
  zoom: 15,
  controls: ['zoomControl', 'fullscreenControl'],
}

const MyMap = () => {
  const searchRef = useRef(null);
  const [coordinates, setCoordinates] = useState(mapData.center)

  const clickOnMap = (e) => {
    const coords = e.get('coords')
    console.log(coordinates, "→", coords)
    setCoordinates(coords)
  }

  return (<div id="map">
    <YMaps className="yandex-map" enterprise query={{ apikey: '81d53001-bd1e-4fff-8cd6-6ea1533aeb5a', lang: 'ru_RU' }}>
      <Map
        modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
        defaultState={mapData}
        className="yandex-map"
        instanceRef={inst => {
          if (!inst?.events?.types?.click
            .some(x => x?.name === "clickOnMap"))
            inst?.events?.add('click', clickOnMap)
        }}
      >

        <SearchControl
          instanceRef={(ref) => {
            if (ref) searchRef.current = ref;
          }}
          options={{ float: 'right' }}
        />
        <GeolocationControl options={{ float: 'left' }} />

        <Placemark
          modules={['geoObject.addon.balloon']}
          // key={coordinates.join(",")}
          geometry={coordinates}
          properties={{
            balloonContentBody:
              'Это выбранная вами точка доставки',
          }}
        />
      </Map>
    </YMaps>
  </div>)
}

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current.coordinates);
  return { coordinates: current.coordinates }
}

export default connect(mapStateToProps, null)(MyMap);