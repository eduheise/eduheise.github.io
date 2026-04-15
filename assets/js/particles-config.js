/**
 * tsParticles configuration — sparse neural-network style
 * Floating nodes with faint connecting lines on dark background
 */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof tsParticles === "undefined") return;

  tsParticles.load("tsparticles", {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 900 },
      },
      color: { value: "#6366f1" },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: { enable: true, minimumValue: 0.15 },
      },
      size: {
        value: 2.5,
        random: { enable: true, minimumValue: 1 },
      },
      links: {
        enable: true,
        distance: 160,
        color: "#6366f1",
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.3, color: "#8b5cf6" },
        },
      },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: { value: 25 },
            links: { distance: 120 },
          },
        },
      },
    ],
  });
});
