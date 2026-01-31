import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery';

const Memory = () => {
  return (
    <main className="page page--gallery page--gallery-full">
      <Link className="back-bubble" to="/">
        Back
      </Link>
      <div className="page__content page__content--overlay">
        <h1>Memory</h1>
        <p className="page__subtext">A gallery for photos, notes, and quiet moments.</p>
      </div>
      <div className="gallery-shell gallery-shell--full">
        <DomeGallery fit={0.85} minRadius={700} maxVerticalRotationDeg={0} segments={34} dragDampening={2} grayscale={false} />
      </div>
    </main>
  );
};

export default Memory;
