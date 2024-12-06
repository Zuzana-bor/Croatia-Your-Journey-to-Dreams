import Menu from './Menu';

const Hero = () => {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/Trogir.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-25 pointer-events-none"></div>
      <Menu />
      <div className="relative text-center text-white p-8">
        <h2 className="text-5xl font-bold">Discover Croatia</h2>
        <p className="mt-4 text-lg">
          Explore the beauty of Croatia’s coasts, cities, and culture.
        </p>
        <button className="mt-6 px-4 py-2 bg-yellow-500 rounded-full text-black">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
