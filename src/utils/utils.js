// Move elements on mouse move
export const bgMouseMove = (e, target) => {
  let x = (window.innerWidth - e.clientX) * 0.06;
  let y = (window.innerHeight - e.clientY) * 0.06;

  target.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${
    x * 0.01
  }deg)`;
};
