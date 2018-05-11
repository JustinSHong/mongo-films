import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
// components
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import Films from "./components/Films";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

// material components
import RaisedButton from "material-ui/RaisedButton";
// styles
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }
  // fetch list of characters from db
  componentDidMount() {
    this.getCharactersList();
  }
  getCharactersList() {
    axios
      .get("http://localhost:5000/api/characters")
      .then(response => {
        this.setState({ characters: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <h1>Mongo Films</h1>
        <CharacterList characters={this.state.characters} />

        {/* render routes here */}
        <Switch>
          <Route exact path={"/"} component={CharacterList} />
          <Route exact path={"/:id"} component={Character} />
          <Route exact path={"/films/:id"} component={Films} />
          <Route exact path={"/planets/:id"} component={Planets} />
          <Route exact path={"/species/:id"} component={Species} />
          <Route exact path={"/starships/:id"} component={Starships} />
          <Route exact path={"/vehicles/:id"} component={Vehicles} />
          <Route
            component={() => {
              <h3>404 This page does not exist yet...</h3>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
