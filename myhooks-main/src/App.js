import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/Movie/NavBar.jsx";
import MovieList from "./components/Movie/MovieList.jsx";
import Movie from "./components/Movie/Movie.jsx";
import ReactPlayer from "react-player";

import {Routes, Route} from "react-router-dom"
import AddTrailer from "./components/AddTrailer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/gj5ibYSz8C0",
      img: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/229683/EN-US_KVSO2_Teaser_Vertical_27x40_RGB_Theatrical_PRE.jpg",
      description:
        "A Knives Out Mystery is an American film directed by Rian Johnson and released in 2022. ",
      Title: " Glass Onion",
      rating: 4,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/ObN4krVV20Y",
      img: "https://m.media-amazon.com/images/M/MV5BOGZmMWM1NTItYzBhYi00YjEzLWI3OTQtNWM4ZDhjMDkxYWEwXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
      description:
        " Directed by Sally El Hosaini. With Matthias Schweighöfer, Manal Issa, Nathalie Issa, Ali Suliman. From war-torn Syria to the 2016 Rio Olympics  ",
      Title: " The Swimmers",
      rating: 4,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/bI4fASMkeQA",
      img: "https://fr.web.img5.acsta.net/pictures/22/09/20/14/47/1643556.jpg",
      description:
        "is an American film directed by Paul Feig released in October 2022 on Netflix. ",
      Title: "L'École du bien et du mal ",
      rating: 3,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/vRunUkdkK8s",
      img: "https://fr.web.img5.acsta.net/pictures/22/09/02/11/45/0753062.jpg",
      description:
        "a film directed by Romain Gavras with Dali Benssalah, Sami Slimane. Synopsis: Called back from the front following the death of his youngest brother ",
      Title: "Athena",
      rating: 2,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/1JBjyBKUHqc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-C5n2-bOIJH7fV7OI3epqduKdCJtOYugXQA&usqp=CAU",
      description:
        "a film directed by Arie Posin with Joey King, Kyle Allen. Synopsis: After losing his great love in a tragic accident",
      Title: "The In Between",
      rating: 4,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/820j10lEAec",
      img: "https://m.media-amazon.com/images/M/MV5BZmYzNTBiZTAtNmJjNi00MTcyLThlZGMtNDA5Y2RkNjM3ODAzXkEyXkFqcGdeQXVyMzg3OTQ5MjU@._V1_.jpg",
      description:
        "a film directed by Kim Farrant starring Leighton Meester, Luke Norris. Synopsis: When her best friend disappears on a trip",
      Title: "The Weekend Away",
      rating: 5,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/BVtN9rwoGpw",
      img: "https://bennigans.com/wp-content/uploads/2022/09/About-Fate-Image.jpg",
      description:
        "is a 2022 American romantic comedy film directed by Maryus Vaysberg from a screenplay by Tiffany Paulsen. It is a remake of the 1976 Soviet",
      Title: "About Fate",
      rating: 5,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filtredMovies, setFiltredMovies] = useState(movies);
  const [stars, setStars] = useState(1);
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    img: "",
    description: "",
    Title: "",
    rating: "",
  });
  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.Title.toLowerCase().includes(search.toLowerCase()) &&
          movie.rating >= stars
        );
      })
    );
  }, [search, stars,movies]);

  return (
    <div>
      <NavBar
        search={search}
        setSearch={setSearch}
        filtredMovies={filtredMovies}
        movies={filtredMovies}
        stars={stars}
        setStars={setStars}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        setMovies={setMovies}
      />

      <Routes>
        <Route
          path="/"
          element={<MovieList movies={filtredMovies} search={search} />}
        />
        <Route
          path="/movie/:id"
          element={<AddTrailer filtredMovies={filtredMovies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
