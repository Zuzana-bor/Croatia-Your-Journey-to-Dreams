import React, { useState, useEffect, useRef, FC } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Feature } from 'ol';
import { Geometry } from 'ol/geom';

export type MapOfCroatiaProps = {
  features: Feature[];
};

const MapOfCroatia: FC<MapOfCroatiaProps> = ({ features }) => {
  const [map, setMap] = useState<Map | null>(null);
  const [featuresLayer, setFeaturesLayer] =
    useState<VectorLayer<Feature<Geometry>>>();

  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initialFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    if (mapElement.current) {
      const initialMap = new Map({
        target: mapElement.current,
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
      setMap(initialMap);
      setFeaturesLayer(initialFeaturesLayer);
    }
  }, []);

  useEffect(() => {
    if (features.length && map && featuresLayer) {
      const newSource = new VectorSource({ features });
      featuresLayer.setSource(newSource);
      map.getView().fit(newSource.getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }
  }, [features]);

  return (
    <div
      ref={mapElement}
      id="map-container"
      style={{ width: '50%', height: '400px' }}
    ></div>
  );
};

export default MapOfCroatia;
