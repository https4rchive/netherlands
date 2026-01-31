import { Link } from 'react-router-dom';

const Backpack = () => {
  return (
    <main className="page">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Backpack</h1>
        <p className="page__subtext">Packing list and gear notes will live here.</p>
        <div className="placeholder-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="placeholder-card" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Backpack;
