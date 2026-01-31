import { useMemo, useState } from 'react';
import places from '../data/places';

const extraGallery = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop'
];

const PlacesGrid = () => {
  const [activePlace, setActivePlace] = useState(null);
  const galleryImages = useMemo(() => {
    if (!activePlace) return [];
    return [activePlace.image, ...extraGallery];
  }, [activePlace]);

  return (
    <div className="places">
      <div className="section-heading">
        <p className="eyebrow">Featured Stops</p>
        <h2>Photo-driven moments to plan around.</h2>
        <p>
          Each stop is a blend of local craft, waterways, and modern design. Click a card to open notes and
          extra photo inspiration.
        </p>
      </div>

      <div className="places__grid">
        {places.map((place) => (
          <button
            key={place.name}
            type="button"
            className="place-card"
            onClick={() => setActivePlace(place)}
          >
            <div className="place-card__image">
              <img src={place.image} alt={`${place.name} in ${place.city}`} />
            </div>
            <div className="place-card__body">
              <div>
                <h3>{place.name}</h3>
                <p className="place-card__city">{place.city}</p>
              </div>
              <p className="place-card__desc">{place.description}</p>
            </div>
          </button>
        ))}
      </div>

      {activePlace && (
        <div className="place-modal" role="dialog" aria-modal="true">
          <div className="place-modal__panel">
            <button className="place-modal__close" type="button" onClick={() => setActivePlace(null)}>
              Close
            </button>
            <div className="place-modal__header">
              <div>
                <p className="eyebrow">{activePlace.city}</p>
                <h3>{activePlace.name}</h3>
                <p>{activePlace.description}</p>
              </div>
              <ul>
                {activePlace.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="place-modal__gallery">
              {galleryImages.map((image, index) => (
                <img key={`${image}-${index}`} src={image} alt={`${activePlace.name} gallery ${index + 1}`} />
              ))}
            </div>
            <div className="place-modal__notes">
              <h4>Notes</h4>
              <p>
                Aim for a relaxed morning walk, a long lunch by the water, and a slow return at sunset. Keep
                time open for cafes, galleries, and canalside detours.
              </p>
            </div>
          </div>
          <button className="place-modal__backdrop" onClick={() => setActivePlace(null)} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default PlacesGrid;
