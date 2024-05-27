import { Feature } from 'ol';

import AboutCroatiaNews from '../layout/AboutCroatiaNews';
import Header from '../layout/Header';
import MapOfCroatia from '../components/MapOfCroatia';
import { useEffect, useState } from 'react';
import GeoJSON from 'ol/format/GeoJSON';
const AboutCroatiaPage = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    fetch('/assets/mock-geojson-api.json')
      .then((response) => response.json())
      .then((fetchedFeatures) => {
        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        };
        const parsedFeatures = new GeoJSON().readFeatures(
          fetchedFeatures,
          wktOptions,
        );

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures);
      });
  }, []);
  return (
    <>
      <Header />
      <AboutCroatiaNews />
      článek o chorvatku- v něm odkazy částí + měst Istrie, severní
      dalmácie,střední dalmácie,jižní dalmácie města Začneme: střední dalmácie-
      Trogir jižní dalmícií + Brist - známe
      <MapOfCroatia features={features} />
    </>
  );
};

export default AboutCroatiaPage;
