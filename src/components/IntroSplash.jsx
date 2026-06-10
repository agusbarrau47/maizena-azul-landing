import { useEffect, useState } from 'react';
import './IntroSplash.css';

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setVisible(false);
      setRemoved(true);
      return;
    }

    // Hide visually after a short delay
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    // Remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1800); // 1200ms + 600ms transition

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`intro-splash ${visible ? 'intro-splash--visible' : 'intro-splash--hidden'}`}>
      <h1 className="intro-splash__text">BLUE SKY GROUP</h1>
    </div>
  );
}
