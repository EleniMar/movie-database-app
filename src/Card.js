import React from 'react';

const Card = ({Title, imdbID, Year, Plot}) => {
    
    return(
        <div className="fl w-100 w-25-ns pa2 "  >
            <div className="b--solid b--light-silver grow bg-lightest-blue shadow-5 tc" style={{height:'550px' }}>
            <img src={`http://img.omdbapi.com/?i=${imdbID}&apikey=51d5b5fa`} alt="No Poster" />
            
                <h2>{Title}</h2>
                <p>{Year}</p>
                <p>{Plot}</p>
                {/* <a class="f6 link dim ph3 pv2 mb2 dib white bg-light-purple" href="#0">See full plot and cast</a> */}
                
            
            </div>
            
        </div>
    );
}

export default Card;