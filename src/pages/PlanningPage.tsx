import AboutCroatiaNews from '../layout/AboutCroatiaNews';
import Header from '../layout/Header';
import Questions from '../components/Questions';

const PlanningPage = () => {
  return (
    <>
      <Header />
      <AboutCroatiaNews />
      <div className="container mx-auto px-6 p-10">
        <p> Zjisti, která lokalita je pro tebe ta pravá</p>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mt-4 rounded shadow transition-all hover:scale-110">
          jdu do toho
        </button>
        <Questions />
      </div>
    </>
  );
};

export default PlanningPage;
