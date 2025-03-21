import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const SkillsEffect = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log('Skills particles loaded');
    }
  }, []);

  return (
    <Particles
      id="skillsParticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        fpsLimit: 120,
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: ["#33CCCC", "#4AC29A", "#2B8A8A"]
          },
          shape: {
            type: ["circle", "triangle"],
            stroke: {
              width: 1,
              color: "#33CCCC"
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#33CCCC",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "connect"]
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4
              }
            },
            connect: {
              distance: 150,
              radius: 100,
              links: {
                opacity: 0.3
              }
            },
            push: {
              particles_nb: 2
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

export default SkillsEffect; 