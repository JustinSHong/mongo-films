import React, { Component } from "react";
import uuid from "uuid";
// components
import Character from "./Character";
// styles
import "../styles/characterList.css";

const CharacterList = props => {
	console.log("CHARACTERLIST PROPS: ", props);
	return (
		<div>
			{props.characters.map((char, index) => {
				// insert key here
				return (
					<div key={uuid()} className="CharacterList">
						<Character char={char} index={index} />
					</div>
				);
			})}
		</div>
	);
};

export default CharacterList;
