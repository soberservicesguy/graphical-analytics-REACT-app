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

// IMPORT COMPONENTS
import {
} from "./"

import { withRouter } from "react-router-dom";

import { Progress } from 'reactstrap';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
			[theme.breakpoints.up('sm')]:{
		paddingLeft:100
		},
	},
	labels:{
		textAlign:'left',
		marginTop:30,
		paddingTop:30

	},
	graphContainer:{
		transform: props => `${props.graphOffset} ${props.graphScale} ${props.graphRotation}`,
		boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.09)',
		marginTop: props => props.containerMarginTop,
		height:780,
	},
});


class MonthlyHorizontalProgressBars extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
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
				<div className={classes.labels}>
					0%
				</div>
				<Progress />
				<div className={classes.labels}>
					25%
				</div>
				<Progress value="25" />
				<div className={classes.labels}>
					50%
				</div>
				<Progress value={50} />
				<div className={classes.labels}>
					75%
				</div>
				<Progress value={75} />
				<div className={classes.labels}>
					100%
				</div>
				<Progress value="100" />
			</div>
		);
	}
}
	
MonthlyHorizontalProgressBars.defaultProps = {
	//:,
};

export default withRouter(withResponsiveness(withStyles(styles)(MonthlyHorizontalProgressBars)));
