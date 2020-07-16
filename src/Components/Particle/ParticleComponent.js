import React from 'react';
import Particles, { DivMode } from 'react-particles-js';
const Particle = () => {
  return (
    <div className="background">
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            color: {
              value: "#edbc58"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#edbc58"
              }
            },
            polygon: {
              nb_sides: 4
            },
            opacity: {
              value: 0.5,
              random: false
            },
            size: {
              value: 2
            },
            line_linked: {
              enable: false,
              distance: 110
            },
            move: {
              enable: true,
              speed: 2,
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
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 40,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 8
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }
        }
      />
    </div>
  )
}
export default Particle;