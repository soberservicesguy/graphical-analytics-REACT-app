
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

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		},
	},
	heading:{
		color:'black',
		fontSize:60,
		fontWeight:'bold',
	},
	text:{
		marginTop:20,
		fontSize:20,
	},
	roundButton:{
		border:'none',
		backgroundColor: 'blue',
		color:'white',
		borderRadius:50/2,
		height:50,
		padding:'15px 20px 15px 20px',
		marginTop:30,
	},
	inlineCircle:{
		paddingVertical: 15,
		marginLeft:10,
		height: 12,
		width: 12,
		backgroundColor: '#bbb',
		borderRadius: '50%',
		display: 'inline-block',
	},

});


class HeadingOverTextOverRoundbutton extends Component {
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
			<div>
				<div>
					<h1 className={classes.heading}>
						Sales Trends and Metrics
					</h1>
					<p className={classes.text}>
						It is a long established fact that a reader will be distracted by the readable content of a page
					</p>
					<button className={classes.roundButton}>
						Sales Report
						<div className={classes.inlineCircle}></div>
					</button>
				</div>
			</div>
		);
	}
}
	
HeadingOverTextOverRoundbutton.defaultProps = {
	//:,
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverTextOverRoundbutton)));
