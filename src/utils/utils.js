// Move elements on mouse move
export const bgMouseMove = (e, target) => {
  let ease = 0.03;
  let x = (window.innerWidth - e.clientX) * ease;
  let y = (window.innerHeight - e.clientY) * ease;
  if (window.innerWidth > 800)
    target.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${
      x * 0.005
    }deg)`;
};

// Move custom cursor
export const cursorMove = (e, target) => {
  target.style.left = e.clientX + "px";
  target.style.top = e.clientY + "px";
};

// Smooth scroll
export const scrollView = (scrollElement) => {
  let current = 0;
  let target = 0;
  let ease = 0.03;

  // Linear interpolation to make it smooth
  const lerp = (start, end, ease) => {
    return start * (1 - ease) + end * ease;
  };

  scrollElement.style.height = "100vh";

  const smoothScroll = () => {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollElement.style.transform = `translateY(${-current}px)`;

    requestAnimationFrame(smoothScroll);
  };

  smoothScroll();
};
