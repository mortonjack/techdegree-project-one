/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Jack Morton
******************************************/

// Array of quotes & information about them
const quotes = [
  {
    quote: "Only those who dare to fail greatly, can ever achieve greatly",
    source: "Robert F. Kennedy",
    // citation: "Day of Affirmation Speech",
    year: "1966",
    tag: "Failure",
    rating: "9/10"
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air",
    source: "Ralph Waldo Emerson",
    citation: "Merlin's Song Poem",
    tag: "Joy",
    rating: "6/10"
  },
  {
    quote: "There is no such thing as luck",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars: Episode IV- A New Hope",
    year: "1977",
    tag: "Effort",
    rating: "7/10"
  },
  {
    quote: "A happy man is too satisfied with the present to think too much about the future.",
    source: "Einstein",
    citation: "School essay entitled \"My Future Plans\"",
    year: "1896",
    tag: "Joy",
    rating: "8/10"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison",
    /* citation: "Edison: His Life and Inventions",
    year: "1910" */
    tag: "Failure",
    rating: "8/10"
  },
];

// Random number generator
function randomNum(max) {
  return Math.floor( Math.random() * max ) + 1;
}

// Generate a random quote
function getRandomQuote() {
  const randNum = randomNum(quotes.length) - 1;
  return quotes[randNum];
}

// Generate a random RGB value
function randomColor() {
  let red, green, blue, rgbColor;
  red = randomNum(256);
  green = randomNum(256);
  blue = randomNum(256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgbColor;
}

// Take a random quote and display it on-screen (in the quote-box div)
function printQuote() {
  const randQuote = getRandomQuote();
  let htmlString = '';

  htmlString = '<p class="quote">' + randQuote.quote + '</p>';
  htmlString += '<p class="source">' +  randQuote.source;
  if (randQuote.citation) {
    htmlString += '<span class="citation">' + randQuote.citation;
  }
  if (randQuote.year) {
    htmlString += '</span><span class="year">' + randQuote.year + '</span>';
  }
  if (randQuote.tag) {
    htmlString += '</span><span class="tag">Tagged: ' + randQuote.tag + '</span>';
  }
  if (randQuote.rating) {
    htmlString += '</span><span class="rating">' + randQuote.rating + ' people liked this quote</span>';
  }
  htmlString += '</p>';

  document.body.style.backgroundColor = randomColor();
  document.getElementById("quote-box").innerHTML = htmlString;
}

// Invokes the "printQuote" function when the "Show anther quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
