import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import {MovieCard} from "./MovieCard";
import {Link} from "react-router-dom";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.img ? (
          <img
            src={movie.img}
            alt={`${movie.name} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.name}</h3>
          <h4 className="release-date">
            {/*<Moment format="YYYY">2002</Moment> Needs to be added */}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
              className="btn"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
          <Link to={"/watch/" + movie.id + "/" + movie.name}>
            <button
                className="btn"
            >
              Play
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
