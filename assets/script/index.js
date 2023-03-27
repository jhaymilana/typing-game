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
let time = 10;

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

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDom();
    e.target.value = "";
    updateScore();
  }
});