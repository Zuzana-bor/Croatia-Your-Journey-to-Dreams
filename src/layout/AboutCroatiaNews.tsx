const AboutCroatiaNews = () => {
  return (
    <>
      <div className="relative h-60">
        <img
          src="/assets/Trogir.jpg"
          alt="Trogir"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="z-2 text-center font-bold text-xl absolute top-0 w-full h-full flex flex-col justify-center items-center ">
          <h1 className="font-sans text-2xl mb-4">
            Zde bude odkaz na nově přidaný článek
          </h1>
          <p>nebo tip na zajímavý článek z této sekce</p>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mt-4 rounded shadow transition-all hover:scale-110">
            přečíst
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutCroatiaNews;
