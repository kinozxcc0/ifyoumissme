particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#ff69b4" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true,
    },
    size: {
      value: 4,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff1493",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
