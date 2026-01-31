import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery';

const Memory = () => {
  return (
    <main className="page page--gallery page--gallery-full">
      <Link className="back-bubble back-bubble--overlay" to="/">
        Back to menu
      </Link>
      <div className="gallery-shell gallery-shell--full">
        <DomeGallery fit={0.85} minRadius={700} maxVerticalRotationDeg={0} segments={34} dragDampening={2} grayscale={false} />
      </div>
    </main>
  );
};

export default Memory;
