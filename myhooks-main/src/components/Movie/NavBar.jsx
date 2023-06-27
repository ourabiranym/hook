import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FaSearch} from "react-icons/fa";
import ReactStars from "react-stars";
import AddMovie from './AddMovie';

function NavBar({setSearch,setStars, newMovie,movies,setMovies,search,stars, setNewMovie,filtredMovies,setFiltredMovies }) {

  const handleChange = (e) => {
    setSearch(e.target.value);

  }
  const handlestars = (newRating)=> {
    setStars(newRating)

  }
  return (
    <div style={{ marginTop: "30px" }}>
      <Navbar bg="dark" variant="dark" className="fixed-top pt-1">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
              width="70"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <span className="title">TRENDING MOVIES</span>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              half={false}
              onChange={handlestars}
              className="star"
            />
          </Navbar.Brand>

          <InputGroup className="size-sm" onChange={handleChange}>
            <InputGroup.Text id="size-sm">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search movies,actors,more..."
              aria-label="Username"
              aria-describedby="size-sm"
            />
          </InputGroup>
          <AddMovie
            newMovie={newMovie}
            setNewMovie={setNewMovie}
            setMovies={setMovies}
            movies={movies}
            search={search}
            stars={stars}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar