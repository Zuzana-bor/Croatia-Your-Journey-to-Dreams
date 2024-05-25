import MapOfCroatia from '../components/MapOfCroatia';
import AboutCroatiaNews from '../layout/AboutCroatiaNews';
import Header from '../layout/Header';
import Hero from '../layout/Hero';

const AboutCroatiaPage = () => {
  return (
    <>
      <Header />
      <AboutCroatiaNews />
      článek o chorvatku- v něm odkazy částí + měst Istrie, severní
      dalmácie,střední dalmácie,jižní dalmácie města Začneme: střední dalmácie-
      Trogir jižní dalmícií + Brist - známe
      <MapOfCroatia />
    </>
  );
};

export default AboutCroatiaPage;
