import React from "react"

function Conditional(props) {
    return (
        <div>
	    {props.allFilled ? <h3>You filled out all the radio buttons.</h3> : <p>Please answer each question.</p>}
	</div>
    )
}

export default Conditional
