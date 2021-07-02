// Move elements on mouse move
export const bgMouseMove = (e, target) => {
  let ease = 0.04;
  let x = (window.innerWidth - e.clientX) * ease;
  let y = (window.innerHeight - e.clientY) * ease;

  target.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${
    x * 0.01
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
  let ease = 0.045;

  // Linear interpolation to make it smooth
  const lerp = (start, end, ease) => {
    return start * (1 - ease) + end * ease;
  };

  const smoothScroll = () => {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollElement.transform = `translateY(${-current}px)`;

    requestAnimationFrame(smoothScroll);
  };

  smoothScroll();
};

export const cursorOnHover = (cursor) => {
  cursor.style.borderColor = "#171717";
};

export const cursorOnLeave = (cursor) => {
  cursor.style.borderColor = "#d7d5e0";
};
