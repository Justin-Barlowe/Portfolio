var words = ['Fullstack Developer ', 'Nerd ', 'Gamer ', 'Metal Head', 'Cybersecurity Enthusiast'];
var wordIndex = 0;
var charIndex = 0;
var currentWord = '';
var deleting = false;
var speed = 100; // Speed in milliseconds
var shortIntroElement = document.getElementById('shortintro');

function typeWriter() {
  if (deleting && charIndex <= 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Go to the next word
    charIndex = 0;
  } else if (!deleting && charIndex === words[wordIndex].length) {
    deleting = true;
    setTimeout(typeWriter, 2000); // Wait for 2 seconds before starting to delete
    return;
  }

  currentWord = words[wordIndex].substring(0, charIndex);
  shortIntroElement.innerHTML = `&lt; I'm a ${currentWord}<span class="cursor"></span> /&gt;`;

  charIndex += deleting ? -1 : 1;
  setTimeout(typeWriter, speed);
}

typeWriter();
