import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './BubbleMenu.css';

const BubbleMenu = ({
  logo,
  items = [],
  menuAriaLabel = 'Toggle navigation',
  menuBg = '#ffffff',
  menuContentColor = '#111111',
  useFixedPosition = false,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.matchMedia('(min-width: 900px)').matches);
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);

    const overlay = overlayRef.current;
    gsap.set(overlay, { autoAlpha: 0, pointerEvents: 'none', display: 'none' });
    gsap.set(bubblesRef.current, { scale: 0.2, opacity: 0 });
    gsap.set(labelRefs.current, { opacity: 0, y: 12 });

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current;
    const labels = labelRefs.current;

    gsap.killTweensOf([overlay, ...bubbles, ...labels]);
    if (tlRef.current) {
      tlRef.current.kill();
    }

    if (isOpen) {
      gsap.set(overlay, { display: 'flex' });
      tlRef.current = gsap
        .timeline({ defaults: { ease: animationEase, duration: animationDuration } })
        .to(overlay, { autoAlpha: 1, pointerEvents: 'auto', duration: 0.2 }, 0)
        .to(bubbles, { scale: 1, opacity: 1, stagger: staggerDelay }, 0.05)
        .to(
          labels,
          { opacity: 1, y: 0, stagger: staggerDelay * 0.8, duration: animationDuration * 0.8 },
          0.1
        );
    } else {
      tlRef.current = gsap
        .timeline({ defaults: { ease: 'power2.inOut', duration: animationDuration * 0.8 } })
        .to(labels, { opacity: 0, y: 10, stagger: staggerDelay * 0.6 }, 0)
        .to(bubbles, { scale: 0.2, opacity: 0, stagger: staggerDelay * 0.6 }, 0)
        .to(
          overlay,
          {
            autoAlpha: 0,
            pointerEvents: 'none',
            duration: 0.2,
            onComplete: () => gsap.set(overlay, { display: 'none' })
          },
          0.1
        );
    }
  }, [isOpen, isDesktop, animationDuration, animationEase, staggerDelay]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`bubble-menu ${useFixedPosition ? 'is-fixed' : ''}`}>
      <div className="bubble-menu__bar">
        <div className="bubble-menu__bubble bubble-menu__logo" style={{ background: menuBg, color: menuContentColor }}>
          {logo}
        </div>
        <button
          className="bubble-menu__bubble bubble-menu__toggle"
          type="button"
          aria-label={menuAriaLabel}
          onClick={handleToggle}
          style={{ background: menuBg, color: menuContentColor }}
        >
          <span className={`bubble-menu__toggle-line ${isOpen ? 'is-open' : ''}`}></span>
          <span className={`bubble-menu__toggle-line ${isOpen ? 'is-open' : ''}`}></span>
        </button>
      </div>

      <div className="bubble-menu__overlay" ref={overlayRef}>
        <div className="bubble-menu__grid">
          {items.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.ariaLabel}
              className="bubble-menu__item"
              ref={(el) => (bubblesRef.current[index] = el)}
              style={{
                transform: `rotate(${isDesktop ? item.rotation : 0}deg)`,
                '--hover-bg': item.hoverStyles?.bgColor || '#111111',
                '--hover-color': item.hoverStyles?.textColor || '#ffffff'
              }}
              onClick={handleItemClick}
            >
              <span
                className="bubble-menu__label"
                ref={(el) => (labelRefs.current[index] = el)}
                style={{ color: menuContentColor }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleMenu;
