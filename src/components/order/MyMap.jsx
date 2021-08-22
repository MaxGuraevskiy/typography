import React, { useRef, useState } from 'react';
// import ReactDOM from "react-dom";
import { YMaps, Map, Placemark, SearchControl, GeolocationControl } from 'react-yandex-maps';
import { connect } from 'react-redux';

const mapData = {
  center: [55.769545, 37.606613],
  zoom: 15,
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
    <YMaps className="yandex-map" >
      <Map
        modules={['geocode']}
        defaultState={mapData}
        className="yandex-map"
        instanceRef={inst => inst?.events?.add('click', clickOnMap)} >

        <SearchControl
          instanceRef={(ref) => {
            if (ref) searchRef.current = ref;
          }}
        />
        <GeolocationControl options={{ float: 'left' }} />

        <Placemark
          // key={coordinates.join(",")}
          geometry={coordinates}
        />
      </Map>
    </YMaps>
  </div>)
}

// class MyMap extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       coords: []
//     };
//   }

//   onMapClick(event) {
//     this.setState((state) => {
//       return {
//         coords: [event.get("coords")]
//       };
//     });
//   }

//   render() {
//     return (
//       <YMaps>
//         <Map onClick={this.onMapClick.bind(this)}>
//           {this.state.coords.map((coords) => (
//             <Placemark
//               geometry={coords}
//             />
//           ))}
//         </Map>
//       </YMaps>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyMap />, rootElement);

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current.coordinates);
  return { coordinates: current.coordinates }
}

export default connect(mapStateToProps, null)(MyMap);