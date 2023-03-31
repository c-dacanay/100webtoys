const spin = document.getElementById("spin");

document.addEventListener('mousemove', e => {
  let rect = spin.getBoundingClientRect();
  let x = (e.clientX - rect.left) / rect.width;
  let y = (e.clientY - rect.top) / rect.height;
  let rotation = Math.atan2(y, x) * (180/Math.PI) - 90;

  spin.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});