import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false, 
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange() {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                        [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange}
                    placeholder="First Name" 
                    />
                    <br />
                    <input 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange}
                    placeholder="Last Name" 
                    />
                    <br />
                    <input 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.handleChange}
                    placeholder="Age" 
                    />
                    <br />
                    <hr />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Male"
                            check={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Female"
                            check={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Other"
                            check={this.state.gender === "other"}
                            onChange={this.handleChange}
                        /> Other
                    </label>
                    <br />
                    <hr />
                    <select 
                    value={this.state.destination} 
                    name="destination"
                    onChange={this.handleChange}
                    > 
                        <option value="">-- Choose a Destination --</option>
                        <option value="Germany">Germany</option>
                        <option value="Norway">Norway</option>
                        <option value="North Pole">North Pole</option>
                        <option value="South Pole">South Pole</option>
                    </select>
                    
                    <hr />
                    
                    <label> 
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                        <br />
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                        <br />
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                 <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination} </p>
                <p> Your dietary restrictions: </p>
                <p> Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p> Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p> Lactose Fee: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
