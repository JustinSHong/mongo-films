import React, { Component } from "react";
// material components
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
// styles
import "../styles/character.css";

class Character extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log("CHARACTER PROPS: ", this.props);
		return (
			<Card className="Character">
				<CardHeader>
					<CardTitle title={this.props.char.name} />
				</CardHeader>
				{Object.keys(this.props.char).map(trait => {
					// only render those character traits that are known
					// don't render miscellaneous traits
					if (
						this.props.char[trait] !== "unknown" &&
						trait !== "name" &&
						trait !== "_id" &&
						trait !== "created" &&
						trait !== "edited" &&
						trait !== "key" &&
						trait !== "__v" &&
						trait !== "homeworld_key"
					) {
						return <CardText>{this.props.char[trait]}</CardText>;
					}
				})}
			</Card>
		);
	}
}

export default Character;
