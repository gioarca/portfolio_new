let words = ['problem solver', 'traveller', 'pragmatic', 'developer'];
let counter = 0;
let word = document.getElementById("carousel-words");

setInterval(update_carousel_words, 2000);

function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if (counter >= words.length){
    counter = 0;
  }
}
