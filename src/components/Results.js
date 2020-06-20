import React from 'react'

function Results(props) {
        return(
            <div>
	        <h2>Score: {props.total}</h2>
	        <h2>Attention:  {props.attention}</h2>
	        <h2>Externalizing: {props.externalizing}</h2>
	        <h2>Internalizing: {props.internalizing}</h2>
	    </div>
        )
    }

export default Results
