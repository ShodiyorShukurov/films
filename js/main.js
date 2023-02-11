// Get elements
const elFilmResult = document.querySelector(".js-film-result");

const elFilmTemplate = document.querySelector(".film-template").content;
const newFilmFragment = new DocumentFragment();

kinolar.forEach((kino) => {
    const cloneTemplate = elFilmTemplate.cloneNode(true);

    cloneTemplate.querySelector(".js-film-title").textContent = kino.title;
    cloneTemplate.querySelector(".js-film-year").textContent ="Year: " + kino.year;
    cloneTemplate.querySelector(".js-film-genres").textContent ="Genres: " + kino.genres.join(", ");

    newFilmFragment.appendChild(cloneTemplate);

});
elFilmResult.appendChild(newFilmFragment);