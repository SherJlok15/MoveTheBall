const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

// if we move the field or change the size, code not work

function move(e) {
  let fieldPosition = field.getBoundingClientRect();

  let fieldTop = fieldPosition.top + field.clientTop;
  let fieldLeft = fieldPosition.left + field.clientLeft;

  let ballTop = e.clientY - fieldTop;
  let ballLeft = e.clientX - fieldLeft;

  if (ballTop < 20) ballTop = 20;
  if (ballTop > 130) ballTop = 130;

  if (ballLeft < 20) ballLeft = 20;
  if (ballLeft > 180) ballLeft = 180;

  ball.style.top = ballTop + 'px';
  ball.style.left = ballLeft + 'px';
}

field.addEventListener('click', move);
