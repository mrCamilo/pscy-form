import React from "react"

function Conditional(props) {
	if(props.allFilled === true) {
	    return (
	        <h3>You filled out all the radio buttons.</h3>
	    )
	}
	return (
	    <div>
		<p>Please answer each question.</p>
	    </div>
	)
}

export default Conditional
