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

import {
	VictoryChart,
	VictoryLine,
	VictoryScatter,
	VictoryLegend,
} from 'victory';

import theme from "../victory_material_theme";

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
			[theme.breakpoints.up('sm')]:{
		paddingLeft:100
		},
	},
	chartLowerHeading:{
		fontSize: 30,
		fontWeight: 'bold',
		textAlign:'center',
		marginBottom:0,
		paddingBottom:0,
		display: props => (props.showLowerHeading === false) ? 'none' : 'block',
	},
	chartUpperHeading:{
		fontSize: 30,
		fontWeight: 'bold',
		textAlign:'center',
		marginBottom:0,
		paddingBottom:0,
		display: props => (props.showUpperHeading === false) ? 'none' : 'block',
	},
	legend:{
		display: props => (props.showLegend === false) ? 'none' : 'block',
		height:50,
		position: 'relative',
		top: props => props.legendVerticalOffset
	},
	graphContainer:{
		transform: props => `${props.graphOffset} ${props.graphScale} ${props.graphRotation}`,
		boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.09)',
		marginTop: props => props.containerMarginTop,
	},
});

// it connects from points to point (x,y) and highlights area underneath

const cartesianInterpolations = [
	"basis",
	"bundle",
	"cardinal",
	"catmullRom",
	"linear",
	"monotoneX",
	"monotoneY",
	"natural",
	"step",
	"stepAfter",
	"stepBefore"
];

const polarInterpolations = [
	"basis",
	"cardinal",
	"catmullRom",
	"linear"
];



class SmoothLineGraph extends Component {
	constructor() {
		super();
		this.state = {
			interpolation: "cardinal",
			polar: false,
			data: SmoothLineGraph.defaultProps.data,
		};
	}


// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT

	}

// RENDER METHOD
	render() {

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (
			<div className={classes.graphContainer}>
				<p className={classes.chartUpperHeading}>
					{this.props.chartUpperHeading}
				</p>

				<div 
					// style={{transform: this.props.scale}}
				>
					<VictoryChart polar={this.state.polar} height={this.props.graphHeight}
						theme={theme}
					>
						<VictoryLine
							interpolation={this.state.interpolation} data={this.state.data}
							style={{ data: { stroke: "#c43a31" } }}
						/>
						<VictoryScatter data={this.state.data}
							size={5}
							style={{ data: { fill: "#c43a31" } }}
						/>
					</VictoryChart>
				</div>

				<p className={classes.chartLowerHeading}>
					{this.props.chartLowerHeading}
				</p>
				<div className={classes.legend}>
					<VictoryLegend x={125} y={50}
						// title="Legend"
						// centerTitle
						orientation="horizontal" // 'vertical'
						gutter={20}
						style={{ border: { stroke: "transparent" }, title: {fontSize: 20 } }}
						data={[
							{ name: "One", symbol: { fill: 'rgb(220, 84, 41)', type: "circle" } },
							{ name: "Two", symbol: { fill: 'rgb(196, 51, 67', type: "circle" } },
							{ name: "Three", symbol: { fill: 'rgb(148, 0, 49)', type: "circle" } }  
						]}
					/>
				</div>
			</div>
		);
	}
}
	
SmoothLineGraph.defaultProps = {
	//:,
	// scale: 'scale(1, 1)',
	chartUpperHeading: 'Total visitors',
	chartLowerHeading: 'Chart conventions',
	graphHeight: 400,
	data:[
		{ x: 0, y: 0 },
		{ x: 1, y: 2 },
		{ x: 2, y: 1 },
		{ x: 3, y: 4 },
		{ x: 4, y: 3 },
		{ x: 5, y: 5 },
		{ x: 6, y: 4 }
	],
	showUpperHeading:true,
	showLowerHeading:true,
	showLegend:true,
	graphOffset:'translate(0, 0)',
	graphScale:'scale(1, 1)',
	graphRotation:'rotate(0deg)',
	legendVerticalOffset:-50,
	containerMarginTop:30,
};

export default withRouter(withResponsiveness(withStyles(styles)(SmoothLineGraph)));
