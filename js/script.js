/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  {
    quote: "Only those who dare to fail greatly, can ever achieve greatly",
    source: "Robert F. Kennedy",
    // citation: "Day of Affirmation Speech",
    year: "1966"
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air",
    source: "Ralph Waldo Emerson",
    citation: "Merlin's Song Poem",
    year: "1867"
  },
  {
    quote: "There is no such thing as luck",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars: Episode IV- A New Hope",
    year: "1977"
  },
  {
    quote: "A happy  man  is  too  satisfied  with  the  present  to  think too much about the future.",
    source: "Einstein",
    citation: "School essay entitled \"My Future Plans\""
    // year: "1896"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison"
    /* citation: "Edison: His Life and Inventions",
    year: "1910" */
  },
];
console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randNum = Math.floor( Math.random() * quotes.length );
  return quotes[randNum];
}

// console.log( getRandomQuote() ); Make sure its working

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
