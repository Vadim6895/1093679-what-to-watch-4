import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const filmCards = [{
  movieName: `The Grand Budapest Hotel`,
  productionDate: `1984`,
  genre: `Drama`,
  moviePoster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  moviePreview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 0,
  director: `Anthony Mann`,
  actors: [`Anthony Mann`],
  rating: 9,
  ratingsQuantity: 250,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum .`,
  length: 120,
  backgroundColor: `#ffffff`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isFavorite: false,
  reviews: [],
}];
/* const reviews = [{
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum .`,
  rating: 8,
  name: `Anthony Mann`,
  date: new Date(),
}];*/

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
  .create(<FilmCard
    name={filmCards[0].movieName}
    id={filmCards[0].id}
    moviePreview={filmCards[0].moviePreview}
    onFilmClick={() => {}}
    previewSrc={filmCards[0].previewSrc}
    renderPlayer={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
