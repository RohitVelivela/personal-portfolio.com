import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  id: number;
  color: 'neon' | 'cyan';
  size: number;
}

interface CursorEffectProps {
  enabled?: boolean;
}

const CursorEffect = ({ enabled = true }: CursorEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  const createParticle = useCallback((x: number, y: number): Particle => {
    return {
      x,
      y,
      id: Date.now() + Math.random(), // Ensure unique IDs
      color: Math.random() > 0.5 ? 'neon' : 'cyan',
      size: Math.random() * 4 + 8, // Random size between 8-12px
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let lastUpdate = 0;
    const THROTTLE_MS = 16; // Approx. 60fps

    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < THROTTLE_MS) return;
      lastUpdate = now;

      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      setTrail(prevTrail => [
        createParticle(clientX, clientY),
        ...prevTrail.slice(0, 7), // Keep last 8 particles
      ]);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Track hover state on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [enabled, createParticle]);

  if (!enabled) return null;

  return (
    <div className="cursor-effect pointer-events-none fixed inset-0 z-40">
      <AnimatePresence mode="popLayout">
        {trail.map((particle, index) => (
          <motion.div
            key={particle.id}
            initial={{ 
              scale: isHovering ? 1.2 : 1,
              opacity: 0.8,
            }}
            animate={{ 
              scale: 0,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{
              position: 'fixed',
              left: particle.x,
              top: particle.y,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color === 'neon' ? '#64FFDA' : '#33CCCC',
              borderRadius: '50%',
              filter: 'blur(3px)',
              boxShadow: `0 0 15px ${particle.color === 'neon' ? '#64FFDA' : '#33CCCC'}`,
              opacity: 1 - (index * 0.1),
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 9999 - index,
            }}
          />
        ))}
      </AnimatePresence>
      
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: '12px',
          height: '12px',
          backgroundColor: '#64FFDA',
          borderRadius: '50%',
          filter: 'blur(2px)',
          opacity: 0.6,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovering ? [1.2, 1.5, 1.2] : [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default CursorEffect; 