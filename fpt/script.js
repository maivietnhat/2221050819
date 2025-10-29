
let listFilm = [
    {
        id: 1,
        name: "Mưa đỏ",
        type: "Phim chiếu rạp",
        banner: "anh/muado.jpg",
        trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI",
        nation: "Việt Nam",
    },
    {
        id: 2,
        name: "Mưa đỏ",
        type: "Phim chiếu rạp",
        banner: "anh/muado.jpg",
        trailer: "https://www.youtube.com/watch?v=UEqjUBGjvwI",
        nation: "Việt Nam",
    },
]
let bannerElement = document.getElementsByClassName("banner")[0];
let bannerElement = document.getElementsByClassName("tt-nation")[0];
function viewTrailer() {
    let trailerElement = document.getElementsByClassName("trailer")[0];
    bannerElement.style.display = "none";
    trailerElement.style.display = "block";

}
function chooseFilm(filmId) {
    let selectedFilm = listFilm.find(film => film.id === filmId);
    bannerElement.style.backgroundImage = "url" + "('" + selectedFilm.banner + "')";
}