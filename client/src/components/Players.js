import React from 'react';

const Players = props => {
    return (
        <div>
            {props.players.map(person => {
                return(
                    <div className="player-card">
                    <h2>{person.name}</h2>
                    <p>Country: {person.country}</p>
                    <p># of Searches: {person.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Players  