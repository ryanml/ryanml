let imageIndex = 0;

const direction = [2, -2];
const images = [
  'img/wash.png',
  'img/face.png',
  'img/moon.png',
  'img/venus.jpg'
];

const box = document.querySelector('.bounce');
box.style.top = `${Math.ceil(Math.random() * 100)}%`;
box.style.left = `${Math.ceil(Math.random() * 100)}%`;

const handleCollision = function(index, newDirection) {
  direction[index] = newDirection;
  box.style.background = `url('${images[imageIndex]}')`;
  imageIndex = imageIndex === (images.length - 1) ? 0 : ++imageIndex;
};

const animation = setInterval(function() {
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const boxRect = box.getBoundingClientRect();

  if (boxRect.top <= 0) {
    handleCollision(0, 2);
  } else if (boxRect.left <= 0) {
    handleCollision(1, 2);
  } else if (boxRect.right >= winWidth) {
    handleCollision(1, -2);
  } else if (boxRect.bottom >= winHeight) {
    handleCollision(0, -2);
  }

  box.style.top = `${Math.ceil(boxRect.top) + direction[0]}px`;
  box.style.left = `${Math.ceil(boxRect.left) + direction[1]}px`;
}, 10);
