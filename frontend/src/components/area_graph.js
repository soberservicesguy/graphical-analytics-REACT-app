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
	VictoryTheme,
	VictoryStack,
	VictoryArea,
	VictoryPortal,
	VictoryGroup,
	VictoryScatter,
	VictoryAnimation,
	VictoryLegend
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


class AreaGraph extends Component {
	constructor() {
		super();
		this.state = {
			data_for_group1:AreaGraph.defaultProps.data_for_group1,	
			data_for_group2:AreaGraph.defaultProps.data_for_group2,
			data_for_group3:AreaGraph.defaultProps.data_for_group3,		
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

				<div>
					<VictoryChart scale={{ x: "time" }} width={400} height={400}
						theme={theme}
					>
						<VictoryStack colorScale="warm">
							<VictoryGroup
								data={this.state.data_for_group1}
							>
								<VictoryArea
									interpolation={"basis"}
								/>
								<VictoryPortal>
								<VictoryScatter
									style={{ data: { fill: "transparent" } }}
								/>
								</VictoryPortal>
							</VictoryGroup>

							<VictoryGroup
								data={this.state.data_for_group2}
							>
							<VictoryArea
								interpolation={"basis"}
							/>
								<VictoryPortal>
									<VictoryScatter
										style={{ data: { fill: "transparent" } }}
									/>
								</VictoryPortal>
							</VictoryGroup>

							<VictoryGroup
								data={this.state.data_for_group3}
							>
								<VictoryArea
									interpolation={"basis"}
								/>
								<VictoryPortal>
									<VictoryScatter
										style={{ data: { fill: "transparent" } }}
									/>
								</VictoryPortal>
							</VictoryGroup>
						</VictoryStack>
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
	
AreaGraph.defaultProps = {
	//:,
	chartUpperHeading:'Total sales',
	chartLowerHeading:'Chart conventions',
	data_for_group1:[
		{ x: new Date(1986, 1, 1), y: 2 },
		{ x: new Date(1996, 1, 1), y: 3 },
		{ x: new Date(2006, 1, 1), y: 5 },
		{ x: new Date(2016, 1, 1), y: 4 },
	],
	data_for_group2:[
		{ x: new Date(1986, 1, 1), y: 4 },
		{ x: new Date(1996, 1, 1), y: 3 },
		{ x: new Date(2006, 1, 1), y: 2 },
		{ x: new Date(2016, 1, 1), y: 5 }
	],
	data_for_group3:[
		{ x: new Date(1986, 1, 1), y: 3 },
		{ x: new Date(1996, 1, 1), y: 1 },
		{ x: new Date(2006, 1, 1), y: 4 },
		{ x: new Date(2016, 1, 1), y: 2 },
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

export default withRouter(withResponsiveness(withStyles(styles)(AreaGraph)));