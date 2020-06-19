import React, {Component} from "react"

class Questionnaire extends Component {
    constructor() {
	super()
	this.state = {
		q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0, q11: 0, q12: 0, q13: 0, q14: 0, q15: 0, q16: 0, q17: 0, q18: 0, q19: 0, q20: 0, q21: 0, q22: 0, q23: 0, q24: 0, q25: 0, q26: 0, q27: 0, q28: 0, q29: 0, q30: 0, q31: 0, q32: 0, q33: 0, q34: 0, q35: 0, total: 0, attention: 0, internalizing: 0, externalizing: 0
	}
	this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
	    [event.target.name]: parseInt(event.target.value)
	})

	this.setState(prevState => {
	    return {
		externalizing: prevState.q16 + prevState.q29 + prevState.q31 + prevState.q32 + prevState.q33 + prevState.q34 + prevState.q35,
		internalizing: prevState.q11 + prevState.q13 + prevState.q19 + prevState.q27,
		attention: prevState.q4 + prevState.q7 + prevState.q8 + prevState.q9 + prevState.q14, 
		total:  prevState.q1 + prevState.q2 + prevState.q3 + prevState.q4 + prevState.q5 + prevState.q6 + prevState.q7 + prevState.q8 + prevState.q9 + prevState.q10 + prevState.q11 + prevState.q12 + prevState.q13 + prevState.q14 + prevState.q15 + prevState.q16 + prevState.q17 + prevState.q18 + prevState.q19 + prevState.q20 + prevState.q21 + prevState.q22 + prevState.q23 + prevState.q24 + prevState.q25 + prevState.q26 + prevState.q27 + prevState.q28 + prevState.q29+prevState.q30 + prevState.q31 + prevState.q32 + prevState.q33 + prevState.q34 + prevState.q35
	    }
	})
    }

    render() {
        return (
	    <form>
		<p>Complain of aches or pains</p>
		<label><input type = "radio" name = "q1" value = {0} onChange={this.handleChange}/>Never</label><br/>
	        <label><input type = "radio" name = "q1" value = {1} onChange={this.handleChange}/>Sometimes</label><br/>
		<label><input type="radio" name = "q1" value = {2} onChange={this.handleChange}/>Always</label>

		<p>Spend more time alone</p>
		<label><input type = "radio" name = "q2" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q2" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q2" value = {2} onChange={this.handleChange}/> Always</label>

	        <p>Tire easily, little energy</p>
		<label><input type = "radio" name = "q3" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q3" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q3" value = {2} onChange={this.handleChange}/> Always</label><br/>

	        <p>Fidgety unable to sit still</p>
		<label><input type = "radio" name = "q4" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q4" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q4" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Have trouble with teacher</p>
		<label><input type = "radio" name = "q5" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q5" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q5" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Less interested in school</p>
		<label><input type = "radio" name = "q6" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q6" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q6" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Act as if driven by motor</p>
	        <label><input type = "radio" name = "q7" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q7" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q7" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Daydream too much</p>
	        <label><input type = "radio" name = "q8" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q8" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q8" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Distracted easily</p>
	        <label><input type = "radio" name = "q9" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q9" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q9" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Are afraid of new situations</p>
	        <label><input type = "radio" name = "q10" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q10" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q10" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Feel sad, unhappy</p>
	        <label><input type = "radio" name = "q11" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q11" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q11" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Are irritable, angry</p>
	        <label><input type = "radio" name = "q12" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q12" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q12" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Feel hopeless</p>
	        <label><input type = "radio" name = "q13" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q13" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q13" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Have trouble concentrating</p>
	        <label><input type = "radio" name = "q14" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q14" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q14" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Less interested in friends</p>
	        <label><input type = "radio" name = "q15" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q15" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q15" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Fight with other children</p>
	        <label><input type = "radio" name = "q16" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q16" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q16" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Absent from school</p>
	        <label><input type = "radio" name = "q17" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q17" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q17" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>School grades dropping</p>
	        <label><input type = "radio" name = "q18" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q18" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q18" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Down on yourself</p>
	        <label><input type = "radio" name = "q19" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q19" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q19" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Visit doctor with doctor finding nothing wrong</p>
	        <label><input type = "radio" name = "q20" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q20" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q20" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Have trouble sleeping</p>
	        <label><input type = "radio" name = "q21" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q21" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q21" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Worry a lot</p>
	        <label><input type = "radio" name = "q22" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q22" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q22" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Want to be with parent more than before</p>
	        <label><input type = "radio" name = "q23" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q23" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q23" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Feel that you are bad</p>
	        <label><input type = "radio" name = "q24" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q24" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q24" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Take unnecessary risks</p>
	        <label><input type = "radio" name = "q25" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q25" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q25" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Get hurt frequently</p>
	        <label><input type = "radio" name = "q26" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q26" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q26" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Seem to be having less fun</p>
	        <label><input type = "radio" name = "q27" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q27" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q27" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Act younger than children your age</p>
	        <label><input type = "radio" name = "q28" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q28" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q28" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Do not listen to rules</p>
	        <label><input type = "radio" name = "q29" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q29" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q29" value = {2}/> Always</label><br/>

		<p>Do not show feelings</p>
	        <label><input type = "radio" name = "q30" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q30" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q30" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Do not understand other peoples feelings</p>
	        <label><input type = "radio" name = "q31" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q31" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q31" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Tease others</p>
	        <label><input type = "radio" name = "q32" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q32" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q32" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Blame others for your troubles</p>
	        <label><input type = "radio" name = "q33" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q33" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q33" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Take things that do not belong to you</p>
	        <label><input type = "radio" name = "q34" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q34" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q34" value = {2} onChange={this.handleChange}/> Always</label><br/>

		<p>Refuse to share</p>
	        <label><input type = "radio" name = "q35" value = {0} onChange={this.handleChange}/> Never</label><br/>
	        <label><input type = "radio" name = "q35" value = {1} onChange={this.handleChange}/> Sometimes</label><br/>
		<label><input type="radio" name = "q35" value = {2} onChange={this.handleChange}/> Always</label><br/>
		<h3>Score: {this.state.total}</h3>
		<h3>Attention: {this.state.attention}</h3>
		<h3>Internalizing: {this.state.internalizing}</h3>
		<h3>Externalizing: {this.state.externalizing}</h3>
		<button>Submit</button>
		</form>
        )
   }
}

export default Questionnaire
