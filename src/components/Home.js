import React from "react";
import { MovieCard } from "./MovieCard";
import {Link} from "react-router-dom";

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            jsonData: null,
            loading: false
        }
    }


    async componentDidMount(){
        await fetch(
            `https://api.themoviedb.org/3/trending/all/day?api_key=d84036d2bbee55b9edda524fe3ec0993&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    this.setState({ jsonData: data.results });
                } else {
                    this.setState({jsonData: []});
                }
            });
    }

    render() {
        return (
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">Watched Movies</h1>
                    </div>

                    {this.state.jsonData != null ? (
                        <div className="movie-grid">
                            {this.state.jsonData.map((movie) => (
                                <Link to={"/watch/" + movie.id + "/" + movie.original_title}>
                                    <MovieCard movie={movie} key={movie.id} type="" />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <h2>Nav</h2>
                    )}
                </div>
            </div>
        );
    }
};
