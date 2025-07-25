import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  smooth: true,
  duration: 1.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
