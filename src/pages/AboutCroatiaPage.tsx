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
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        };
        const parsedFeatures = new GeoJSON().readFeatures(
          fetchedFeatures,
          wktOptions,
        );

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
