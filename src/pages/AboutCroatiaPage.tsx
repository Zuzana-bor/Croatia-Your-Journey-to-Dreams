import { Feature } from 'ol';

import AboutCroatiaNews from '../layout/AboutCroatiaNews';

import MapOfCroatia from '../components/MapOfCroatia';
import { useEffect, useState } from 'react';
import GeoJSON from 'ol/format/GeoJSON';
import Hero from '../layout/Hero';
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
      <Hero />
      <AboutCroatiaNews />
      <div className="container mx-auto px-6 p-10">
        článek o chorvatku- v něm odkazy částí + měst Istrie, severní
        dalmácie,střední dalmácie,jižní dalmácie města Začneme: střední
        dalmácie- Trogir jižní dalmícií + Brist - známe
        <MapOfCroatia features={features} />
      </div>
    </>
  );
};

export default AboutCroatiaPage;
