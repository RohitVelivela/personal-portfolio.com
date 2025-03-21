import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const MagicMouse = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log('Particles loaded');
    }
  }, []);

  return (
    <Particles
      id="magicMouse"
      className="fixed inset-0 pointer-events-none"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#64FFDA"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "trail"
            },
            resize: true
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 3,
              particles: {
                size: {
                  value: 2
                },
                color: {
                  value: "#64FFDA"
                },
                opacity: {
                  value: 0.5
                }
              }
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent"
        }
      }}
    />
  );
};

export default MagicMouse; 