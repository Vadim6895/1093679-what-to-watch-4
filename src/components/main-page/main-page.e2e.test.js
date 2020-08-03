import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page.jsx";

// import {Router} from "react-router-dom";
// import history from "../../history.js";
// import {Provider} from "react-redux";
// import store from "../../reducer/store.js";

Enzyme.configure({
  adapter: new Adapter(),
});

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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing
   elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum .`,
  length: 120,
  backgroundColor: `#ffffff`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  isFavorite: false,
  reviews: [],
}];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`Should MainPage e2e be correctly`, () => {
  const playerClick = jest.fn();
  // const myListClick = jest.fn();

  const mainPage = shallow(
      <MainPage
        filmCards={filmCards}
        promoMovie={filmCards[0]}
        onFilmClick={() => {}}
        onPlayerClick={playerClick}
        onGenreClick={() => {}}
        activeGenreCards={filmCards}
        activeGenre={filmCards[0].genre}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />
  );
  const playerButton = mainPage.find(`.btn--play`);
  playerButton.props().onClick();
  expect(playerClick.mock.calls.length).toBe(1);

  /* const myListButton = mainPage.find(`.btn--list`);
  myListButton.props().onClick();
  expect(myListClick.mock.calls.length).toBe(1);*/
});