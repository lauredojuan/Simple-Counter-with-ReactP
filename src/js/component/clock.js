import React, { Component } from "react";

export class Clock extends Component {
	constructor() {
        super(props);
        state = {
            counter: 0,
            seconds: null
        };
    }
    
	render() {
		return (
			<div className="bigCounter">
				<div className="calendar">
					<i className="far fa-clock" />
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		);
	}
}


setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);

	counter++;

	digitOne = { one };
	digitTwo = { two };
	digitThree = { three };
	digitFour = { four };
}, 1000);
