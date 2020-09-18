import React from 'react';
import { YMaps, Map, SearchControl } from 'react-yandex-maps';

const MyMap = () => (
  <YMaps>
    <div>My awesome application with maps!</div>
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      <SearchControl options={{ float: 'right' }} />
    </Map>
  </YMaps>
);

export default MyMap;