function generateClick(){
    var quotes = {
      " - Chris Pine" : `"Programming isn't about what you know; it's about what you can figure out."`,
      " - Dennis Ritchie" : `"The only way to learn a new programming language is by writing programs in it."`,
      " - Joyce Wheeler" : `"Sometimes it's better to leave something alone, to pause, and that's very true of programming."`,
      " - Burt Rutan": `"Testing leads to failure, and failure leads to understanding."`,
      " - Thomas Fuchs" : `"The best error message is the one that never shows up."`,
      " - Grace Hopper" : `"The most damaging phrase in the language is.. it's always been done this way."`,
      " - John Johnson" : `"First,solve the problem. Then, write the code."`,
      " - Oscar Wilde" : `"Experience is the name everyone gives to their mistakes."`,
      " - Coco Chanel" : `"In order to be irreplaceable, one must always be different."`,
      " - Chris Helimann" : `"Java is to JavaScript what car is to Carpet."`,
       " - Kent Beck" : `"Optimism is an occupational hazard of programming: feedback is the treatment."`,
       " - Austin Freeman" : `"Simplicity is the soul of efficiency."`,
       " - Ralph Johnson" : `"Before software can be reusable it first has to be usable."`,
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quo = quotes[author];
    document.getElementById("quote").innerHTML = quo;
    document.getElementById("author").innerHTML = author;
}