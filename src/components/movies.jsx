import React from "react";

export const Movies = (props) => {
    return (
        <>
            {
                props.movies.map((movie, index) => (
                    <div className="col-2 my-2" key={movie.imdbID}>
                        <div className="card movie-card" style={
                            {
                                cursor: 'pointer'
                            }
                            }>
                            <img src={movie.Poster} className="card-img-top img-movie" alt={movie.Title} />
                            <div className="card-body text-center bg-danger text-white title-movie">
                                <span className="title-movie-text">
                                    {movie.Title}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};