import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import CurvedLoop from '../components/CurvedLoop';
import './BubbleLanding.css';

const bubbles = [
  {
    label: 'COUNTDOWN',
    path: '/countdown',
    rotation: -8,
    radius: '45% 55% 48% 52% / 52% 48% 55% 45%'
  },
  {
    label: 'MEMORY',
    path: '/memory',
    rotation: 6,
    radius: '52% 48% 55% 45% / 48% 52% 45% 55%'
  },
  {
    label: 'TO DO',
    path: '/todo',
    rotation: -4,
    radius: '48% 52% 45% 55% / 55% 45% 52% 48%'
  },
  {
    label: 'TOP SECRET',
    path: '/top-secret',
    rotation: 10,
    radius: '50% 50% 60% 40% / 45% 55% 50% 50%'
  },
  {
    label: 'BACKPACK',
    path: '/backpack',
    rotation: -10,
    radius: '55% 45% 50% 50% / 50% 55% 45% 50%'
  }
];

const BubbleLanding = () => {
  const bubbleRefs = useRef([]);
  const floatTweens = useRef([]);
  const navigate = useNavigate();

  const bubbleList = useMemo(() => bubbles, []);

  useEffect(() => {
    const elements = bubbleRefs.current.filter(Boolean);
    gsap.set(elements, { scale: 0, opacity: 0, transformOrigin: 'center' });

    gsap.to(elements, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.6)',
      stagger: 0.12,
      rotation: (index) => bubbleList[index]?.rotation || 0
    });

    floatTweens.current = elements.map((el, index) =>
      gsap.to(el, {
        y: () => gsap.utils.random(-8, 10),
        rotation: () => (bubbleList[index]?.rotation || 0) + gsap.utils.random(-4, 4),
        duration: gsap.utils.random(3.5, 5.5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    );

    return () => {
      floatTweens.current.forEach((tween) => tween.kill());
      gsap.killTweensOf(elements);
    };
  }, [bubbleList]);

  const handleHover = (index, entering) => {
    const element = bubbleRefs.current[index];
    if (!element) return;
    gsap.to(element, {
      scale: entering ? 1.05 : 1,
      rotation: entering ? 0 : bubbleList[index]?.rotation || 0,
      boxShadow: entering
        ? '0 22px 45px rgba(0, 0, 0, 0.28)'
        : '0 18px 35px rgba(0, 0, 0, 0.22)',
      duration: 0.25,
      ease: 'power2.out'
    });
  };

  const handleClick = (index, path) => {
    const element = bubbleRefs.current[index];
    if (!element) {
      navigate(path);
      return;
    }
    gsap.to(element, {
      scaleX: 0.92,
      scaleY: 0.88,
      duration: 0.12,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
      onComplete: () => navigate(path)
    });
  };

  return (
    <main className="bubble-landing">
      <div className="bubble-landing__overlay" />
      <div className="bubble-landing__content">
        <CurvedLoop
          marqueeText="FIRST TRIP TO NETHERLANDS ✦ FIRST TRIP TO NETHERLANDS ✦ "
          speed={2.8}
          curveAmount={-320}
          direction="left"
          interactive
          className="hero-curved-text"
        />
        <div className="bubble-grid">
          {bubbleList.map((bubble, index) => (
            <button
              key={bubble.label}
              type="button"
              className={`bubble bubble--${index + 1}`}
              ref={(el) => (bubbleRefs.current[index] = el)}
              style={{ borderRadius: bubble.radius }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              onClick={() => handleClick(index, bubble.path)}
            >
              {bubble.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BubbleLanding;
