import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery';

const Memory = () => {
  return (
    <main className="page page--gallery">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content">
        <h1>Memory</h1>
        <p className="page__subtext">A gallery for photos, notes, and quiet moments.</p>
        <div className="gallery-shell">
          <DomeGallery fit={0.75} minRadius={700} maxVerticalRotationDeg={0} segments={34} dragDampening={2} grayscale={false} />
        </div>
      </div>
    </main>
  );
};

export default Memory;
