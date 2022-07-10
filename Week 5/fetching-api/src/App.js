import "./App.css";
import React from "react";

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       character: {}
//     }

//   }

//   componentDidMount() {
//     this.setState({loading: true})
//     fetch("https://swapi.co/api/people/1")
//     .then(response => response.json())
//     .then(data =>  {
//       this.setState({
//         loading: false,
//         character:data

//       })
//     })

//   }

//   render() {
//     const text = this.state.loading ? "loading..." : this.state.character.name
//     return (
//       <div>
//         {this.state.character.name}

//       </div>
//     )

//   }

// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "red"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name] : checked}) : this.setState({ [name]: value});
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea />
        <br />
        <label>
          <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange} 
          /> Is Friendly?
          
        </label>
        <br/>
        <label>
          <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange} 
          /> Male
          
        </label>
        <br/>
        <label>
          <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange} 
          /> Female

        <br/>
        <label>Favoruite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          
        </select>

          
        </label>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>

        <button>Submit</button>
      </form>
    );
  }
}

export default App;
