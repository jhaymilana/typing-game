/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Final Assignment 
Jayvee Milana

Typing Game

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
const start = document.getElementById("start");
const backgroundSound = new Audio('./assets/audio/background.mp3');
backgroundSound.type = 'audio/mp3';

const words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 
  'population', 'weather', 'bottle', 'history', 'dream', 'character', 'money', 
  'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow', 
  'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 
  'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component',
  'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 
  'agency', 'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 
  'magician', 'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 
  'evolution','banana', 'perfumer', 'computer', 'management', 'discovery', 
  'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery',
  'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language',
  'homework', 'fantastic', 'economy', 'interview', 'awesome', 'challenge',
  'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet',
  'software', 'update', 'yellow', 'keyboard', 'window'];

let randomWord;
let score = 0;
let time = 120;
text.focus();

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDom();

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
  endgameEl.innerHTML = `
    <h2>Time ran out!</h2>
    <p>Your final score is ${score}</p>
    <button onClick="location.reload()">Reload</button>
  `;
}

addWordToDom();

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDom();
    e.target.value = "";
    updateScore();  
  }
});

start.addEventListener('click', function() {
  backgroundSound.play();
  updateTime();
  start.classList.add('hidden');
});
