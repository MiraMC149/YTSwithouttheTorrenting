import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [q, setQuery] = useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const path = "search/movie";

  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };
  function handleMovies(movies) {
    let url = constructUrl("search/movie", movies);
    return fetch(url).then((response) => response.json());
  }
  function fetchGenres() {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    ).then((response) => response.json());
  }

  function fetchPopularMovies() {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&language=en-US&page=100`
    ).then((response) => response.json());
  }

  let handleQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <Navi
        setShowSpinner={setShowSpinner}
        handleQuery={handleQuery}
        constructUrl={constructUrl}
        handleMovies={handleMovies}
      />
      <Main
        showSpinner={showSpinner}
        query={q}
        constructUrl={constructUrl}
        handleMovies={handleMovies}
      />
      <Footer />
    </div>
  );
}
