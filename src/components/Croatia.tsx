const Croatia = () => {
  return (
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">O Chorvatsku</h4>
        <p className="text-gray-600 mb-8">
          Stručný text o historii, kultuře, geografii a památkách Chorvatska.
          Interaktivní mapa s možností filtrování podle typu zájmu (pláže,
          památky, restaurace, atd.). Galerii fotografií z různých oblastí
          Chorvatska.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src="assets/Trogir.jpg" alt="Monitoring" />
      </div>
    </div>
  );
};

export default Croatia;
