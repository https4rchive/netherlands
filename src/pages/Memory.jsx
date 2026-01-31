import { Link } from 'react-router-dom';

const Memory = () => {
  return (
    <main className="page">
      <Link className="back-button" to="/">
        Back
      </Link>
      <div className="page__content">
        <p className="eyebrow">Memory</p>
        <h1>Photo gallery & notes</h1>
        <div className="placeholder">
          <p>Add your photos and captions here.</p>
        </div>
      </div>
    </main>
  );
};

export default Memory;
