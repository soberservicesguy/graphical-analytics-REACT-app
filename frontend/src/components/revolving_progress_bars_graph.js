
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	// Button 
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

import { withRouter } from "react-router-dom";

// import graphs
import {
	VictoryPie,
	VictoryAnimation,
	VictoryLabel,
} from 'victory';

import theme from "../victory_material_theme";

// import gsap animation tool
import { Controls, Tween } from 'react-gsap';

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});


class RevolvingProgressBarsGraph extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			percent: 25, 
			data: this.getData(25)
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {
		let percent = 25;
		this.setStateInterval = window.setInterval(() => {
			percent += (Math.random() * 25);
			percent = (percent > 100) ? 0 : percent;
			this.setState({
				percent, data: this.getData(percent)
			});
		}, 2000);
// FETCHING DATA FOR COMPONENT
	}
	componentWillUnmount() {
		window.clearInterval(this.setStateInterval);
	}

	getData(percent) {
		return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
	}


// RENDER METHOD
	render() {

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (
			<div style={{
				height:400, // given height since the label was positioned relative and shifted upward
				transform: `scale(0.25, 0.25) ${this.props.translate}`,
			}}>
				<Tween to={{ rotation: 360, repeat:-1 }} duration={10} ease="none">
					<svg viewBox="0 0 400 400" width="100%" height="100%">
						<circle cx={200} cy={200} r={90} fill="blue"/>
						<VictoryPie
							theme={theme}
							standalone={false}
							animate={{ duration: 1000 }}
							width={400} height={400}
							data={this.state.data}
							innerRadius={140}
							cornerRadius={0}
							labels={() => null}
							style={{
							    data: { fill: ({ datum }) => {
									const color = datum.y > 30 ? "green" : "red";
									return datum.x === 1 ? color : "transparent";
								    }
							    }
							}}
						/>
					</svg>
				</Tween>
				<svg viewBox="0 0 400 400" width="100%" height="100%" style={{position:'relative', bottom:400}}>
					<VictoryAnimation duration={1000} data={this.state}>
						{(newProps) => {
							return (
								<VictoryLabel
									textAnchor="middle" verticalAnchor="middle"
									x={200} y={200}
									text={`${Math.round(newProps.percent)}%`}
									style={{ fontSize: 45, fill:'#ffffff'}}
								/>
						    );
					  }}
					</VictoryAnimation>
				</svg>
			</div>
		);
	}
}
	
RevolvingProgressBarsGraph.defaultProps = {
	//:,
	translate: 'translate(500px, 100px)'
};

export default withRouter(withResponsiveness(withStyles(styles)(RevolvingProgressBarsGraph)));
