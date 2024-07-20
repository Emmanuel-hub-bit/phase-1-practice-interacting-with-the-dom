let counter = document.getElementById('counter');
let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');
let likesList = document.querySelector('.likes');
let commentForm = document.getElementById('comment-form');
let commentsList = document.getElementById('list');
let count = 0;
let paused = false;
let likes = {};

function incrementCounter() {
  if (!paused) {
    count++;
    counter.textContent = count;
  }
}

let timer = setInterval(incrementCounter, 1000);

plusButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

heartButton.addEventListener('click', () => {
  if (likes[count]) {
    likes[count]++;
  } else {
    likes[count] = 1;
  }
  displayLikes();
});

function displayLikes() {
  likesList.innerHTML = '';
  for (let key in likes) {
    let li = document.createElement('li');
    li.textContent = `${key} has been liked ${likes[key]} time(s).`;
    likesList.appendChild(li);
  }
}

pauseButton.addEventListener('click', () => {
  if (paused) {
    timer = setInterval(incrementCounter, 1000);
    pauseButton.textContent = 'pause';
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
  } else {
    clearInterval(timer);
    pauseButton.textContent = 'resume';
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
  }
  paused = !paused;
});

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let commentInput = document.getElementById('comment-input');
  let comment = commentInput.value;
  if (comment) {
    let p = document.createElement('p');
    p.textContent = comment;
    commentsList.appendChild(p);
    commentInput.value = '';
  }
});
