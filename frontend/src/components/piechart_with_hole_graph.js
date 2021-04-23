
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
	VictoryPie,
	VictoryLabel,
	VictoryAnimation,
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
	legend:{
		display: props => (props.showLegend === false) ? 'none' : 'block',
		height:50,
		position: 'relative',
		top: props => props.legendVerticalOffset
	},	
	chartUpperHeading:{
		fontSize: 30,
		fontWeight: 'bold',
		textAlign:'center',
		marginBottom:0,
		paddingBottom:0,
		display: props => (props.showUpperHeading === false) ? 'none' : 'block',
	},
	graphContainer:{
		transform: props => `${props.graphOffset} ${props.graphScale} ${props.graphRotation}`,
		boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.09)',
		marginTop: props => props.containerMarginTop,
	},
});


class PiechartWithHoleGraph extends Component {
	constructor() {
		super();
		this.state = {
			data: [
				{ x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
			],
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

				<svg viewBox={`0 0 ${this.props.svgWidth} ${this.props.svgWidth}`}>
					<VictoryAnimation duration={1000} data={this.state.data} 
						// data should change, when it changes animation plays
					>
						{(newProps) => {
						return (
							<React.Fragment>
								<VictoryPie
									standalone={false}
									width={this.props.graphWidth} height={this.props.graphHeight}
									data={this.state.data}
									innerRadius={68} labelRadius={100}
									style={{ labels: { fontSize: 20, fill: "white" }, }}
									theme={theme}
								/>
								<VictoryLabel
									textAnchor="middle"
									style={{ fontSize: 20 }}
									x={200} y={200}
									text="Pie!"
								/>
							</React.Fragment>
							);
						}}
					</VictoryAnimation>
				</svg>

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
	
PiechartWithHoleGraph.defaultProps = {
	//:,
	graphWidth:400,
	graphHeight:400,
	svgWidth:400,
	svgHeight:400,
	chartUpperHeading: 'Total visitors',
	chartLowerHeading: 'Chart conventions',
	showUpperHeading:true,
	showLowerHeading:true,
	showLegend:true,
	graphOffset:'translate(0, 0)',
	graphScale:'scale(1, 1)',
	graphRotation:'rotate(0deg)',
	legendVerticalOffset:-50,
	containerMarginTop:30,
};

export default withRouter(withResponsiveness(withStyles(styles)(PiechartWithHoleGraph)));
