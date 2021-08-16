import React, { useRef } from 'react';
import { YMaps, Map as YMap, Placemark, SearchControl, GeolocationControl, } from 'react-yandex-maps';
import { connect } from 'react-redux';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
}

const coordinates = [
  [55.769545, 37.606613]
];

// var myPlacemark,
//   myMap = new ymaps.Map('map', {
//     center: [55.753994, 37.622093],
//     zoom: 9
//   }, {
//     searchControlProvider: 'yandex#search'
//   });

// // Слушаем клик на карте.
// myMap.events.add('click', function (e) {
//   var coords = e.get('coords');

//   // Если метка уже создана – просто передвигаем ее.
//   if (myPlacemark) {
//     myPlacemark.geometry.setCoordinates(coords);
//   }
//   // Если нет – создаем.
//   else {
//     myPlacemark = createPlacemark(coords);
//     myMap.geoObjects.add(myPlacemark);
//     // Слушаем событие окончания перетаскивания на метке.
//     myPlacemark.events.add('dragend', function () {
//       getAddress(myPlacemark.geometry.getCoordinates());
//     });
//   }
//   getAddress(coords);
// });

// // Создание метки.
// function createPlacemark(coords) {
//   return new ymaps.Placemark(coords, {
//     iconCaption: 'поиск...'
//   }, {
//     preset: 'islands#violetDotIconWithCaption',
//     draggable: true
//   });
// }

// // Определяем адрес по координатам (обратное геокодирование).
// function getAddress(coords) {
//   myPlacemark.properties.set('iconCaption', 'поиск...');
//   ymaps.geocode(coords).then(function (res) {
//     var firstGeoObject = res.geoObjects.get(0);

//     myPlacemark.properties
//       .set({
//         // Формируем строку с данными об объекте.
//         iconCaption: [
//           // Название населенного пункта или вышестоящее административно-территориальное образование.
//           firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
//           // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
//           firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
//         ].filter(Boolean).join(', '),
//         // В качестве контента балуна задаем строку с адресом объекта.
//         balloonContent: firstGeoObject.getAddressLine()
//       });
//   });
// }

const Map = () => {
  const searchRef = useRef(null);
  return (<div id="map">
    <YMaps className="yandex-map" >
      <YMap defaultState={mapData} className="yandex-map" on>
        <SearchControl
          instanceRef={(ref) => {
            if (ref) searchRef.current = ref;
          }}
        />
        <GeolocationControl options={{ float: 'left' }} />
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
      </YMap>
    </YMaps>
  </div>)
}

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current.coordinates);
  return { coordinates: current.coordinates }
}

export default connect(mapStateToProps, null)(Map);