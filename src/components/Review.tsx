const Review = () => {
  return (
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Uživatelské recenze
        </h4>
        <p className="text-gray-600 mb-8">
          Recenze a hodnocení od uživatelů aplikace, kteří navštívili
          Chorvatsko. Možnost filtrování recenzí podle typu zájmu, destinace a
          hodnocení.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src="assets/Trogir.jpg" alt="Monitoring" />
      </div>
    </div>
  );
};

export default Review;
