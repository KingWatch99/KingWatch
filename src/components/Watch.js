import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player'

export const Watch = () => {

    const [link, setLink] = useState();
    let {movieName} = useParams();

    async function getData(){
        fetch('https://kingwatchmovie.kingwatch.repl.co/'+movieName)
            .then((response) => {
                return response.text();
            })
            .then((htmlLink) => {
                setLink(htmlLink)
            });
    }
    useEffect( () => {
        getData()
    }, []);
    {/**/}
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">{movieName}</h1>
                </div>
                <p className="heading">{link}</p>
                <ReactPlayer url={link} controls/>
            </div>
        </div>
    );
};
