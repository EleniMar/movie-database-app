import React from 'react';
import Card from './Card';


const CardList = ({movies}) => {

    const cardArray = movies.map((movie,i)=> {
        return <Card key={movies[i].imdbID} Title={movies[i].Title} imdbID={movies[i].imdbID} Year={movies[i].Year} Plot={movies[i].Plot}/>
    });
    
    return(
        <div className="cf ph2-ns">
          {cardArray}
        </div>
    );

}

export default CardList;