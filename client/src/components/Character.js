import React, { Component } from "react";
// material components
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
// styles
import "../styles/character.css";

const Character = props => {
	console.log("CHARACTER PROPS: ", props);
	return (
		<Card className="Character">
			<CardHeader>
				<CardTitle title={props.char.name} />
			</CardHeader>
			{Object.keys(props.char).map(trait => {
				// only render those character traits that are known
				// don't render miscellaneous traits
				if (
					props.char[trait] !== "unknown" &&
					trait !== "name" &&
					trait !== "_id" &&
					trait !== "created" &&
					trait !== "edited" &&
					trait !== "key" &&
					trait !== "__v" &&
					trait !== "homeworld_key"
				) {
					return <CardText>{props.char[trait]}</CardText>;
				}
			})}
		</Card>
	);
};

export default Character;
