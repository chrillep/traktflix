'use strict';

/* This was necessary to priorize Star Wars: The Clone Wars (2008) over Star Wars: Clone Wars (2003).
  I left this object because it could be useful for other movies/shows */
var fullTitles = {
  'Star Wars: The Clone Wars': '"Star Wars: The Clone Wars"',
  'The Office (U.S.)': 'The Office (US)',
  'The Blind Side': '"The Blind Side"',
  'The Avengers': '"The Avengers"',
  'The Seven Deadly Sins': '"The Seven Deadly Sins"',
  'Young and Hungry': '"Young and Hungry"',
  'The 100': '"The 100"',
  'The House of Cards Trilogy (BBC)': 'The House of Cards'
}

function Item(options) {
  this.title = fullTitles[options.title] || options.title;
  this.type = options.type;

  if (this.type === 'show') {
    this.epTitle = options.epTitle;
    this.season = options.season;
    this.episode = options.episode;
  }
}

module.exports = Item;
