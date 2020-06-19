const CARDS_COUNT = 8;

const getArrayRandElement = (arr) => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const MOVIE_NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const PRODUCTION_DATE = [`1984`, `1999`, `2001`, `2003`, `2010`];
const GENRES = [`Drama`, `Vestern`, `Comedy`, `Fantasy`, `Animation`];
const MOVIE_POSTERS = [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`, `img/bohemian-rhapsody.jpg`, `img/macbeth.jpg`];

const createFilmCard = (id) => {
  const filmCard = {
    movieName: getArrayRandElement(MOVIE_NAMES),
    productionDate: getArrayRandElement(PRODUCTION_DATE),
    genre: getArrayRandElement(GENRES),
    poster: getArrayRandElement(MOVIE_POSTERS),
    id
  };
  return filmCard;
};

let filmCardsMock = [];
for (let i = 0; i < CARDS_COUNT; i++) {
  filmCardsMock.push(createFilmCard(i));
}

export {filmCardsMock};
