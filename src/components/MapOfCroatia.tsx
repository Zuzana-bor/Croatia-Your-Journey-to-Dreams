import React, { useState, useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { transform } from 'ol/proj';

const MapOfCroatia = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('načetla jsem se');
    const initialFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    if (mapElement != null) {
      const initialMap = new Map({
        target: mapElement.current as HTMLDivElement,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
            }),
          }),
          initialFeaturesLayer,
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }, []);
  return (
    <>
      <div
        ref={mapElement}
        id="map-container"
        style={{ width: '100%', height: '400px' }}
      ></div>
    </>
  );
};

export default MapOfCroatia;
