import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Conditional from "./Conditional";


    // this.state = {
    //   isLoading: true
    // }
  //   this.state = {
  //     unreadMessages: [
  //       "call your mom!",
  //       "New spam email available. All links are definitely safe to click.",
  //       "call your mom!",
  //       "New spam email available. All links are definitely safe to click.",
  //       "call your mom!",
  //       "New spam email available. All links are definitely safe to click.",
  //     ],
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   //  return the new, updated state based upon the props
  // }

  // getSnapshotBeforeUpdate() {
  //   //  create a backup of the current way things are
  // }

  // componentDidMount() {
  //   // GET the data I need to correctly display
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //     }, 1500)

  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //  return true if want it to update
  //   //  return false if not
  // }

  // componentWillUnmount() {
  //   // remove event listener
  //   // teardown or cleanup your code before your component disappears
  //   // (e.g. remove event listeners)
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.unreadMessages.length > 0 && (
  //         <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
  //       )}
  //     </div>
  //   );
  // }


  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      }
      this.logInClick = this.logInClick.bind(this)
    }

    logInClick() {
      this.setState((prevState) => {
        return {
          isLoggedIn: !prevState.isLoggedIn
        };
      });
    }

    render() {
      let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
      let displayText = this.state.isLoggedIn ? "Logged in" : "Logged Out"
      return (
        <div>
          <button onClick={this.logInClick}>{buttonText}</button>
          <h1>{displayText}</h1>
        </div>
      )
    }


}

export default App;
