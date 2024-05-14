const Media = () => {
  return (
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <img src="assets/Trogir.jpg" alt="Monitoring" />
      </div>
      <div className="w-full md:w-1/2 pl-10">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Sociální média
        </h4>
        <p className="text-gray-600 mb-8">
          Feed s příspěvky z Instagramu a Facebooku s fotkami a videy z
          Chorvatska. Možnost sdílení vlastních fotek a zážitků.
        </p>
      </div>
    </div>
  );
};

export default Media;
