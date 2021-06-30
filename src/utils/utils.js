// Move elements on mouse move
export const bgMouseMove = (e, target) => {
  let x = (window.innerWidth - e.clientX) * 0.06;
  let y = (window.innerHeight - e.clientY) * 0.06;

  target.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${
    x * 0.01
  }deg)`;
};

// Move custom cursor
export const cursorMove = (e, target) => {
  target.current.style.left = e.clientX + "px";
  target.current.style.top = e.clientY + "px";
};

// Smooth scroll
export const scrollView = (scrollElement) => {
  let current = 0;
  let target = 0;
  let ease = 0.045;

  // Linear interpolation to make it smooth
  const lerp = (start, end, ease) => {
    return start * (1 - ease) + end * ease;
  };

  const smoothScroll = () => {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollElement.current.style.transform = `translateY(${-current}px)`;

    requestAnimationFrame(smoothScroll);
  };

  smoothScroll();
};
