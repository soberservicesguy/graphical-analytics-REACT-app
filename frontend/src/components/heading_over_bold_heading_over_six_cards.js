
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
	CardHavingImageOverBoldheadingOverHeading,
} from "./"

import { withRouter } from "react-router-dom";

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
			[theme.breakpoints.up('sm')]:{
		paddingLeft:100
		},
	},
	smallerHeading:{
		fontSize:25,
		color:'blue',
		textAlign:'center',
	},
	largerHeading:{
		fontSize:40,
		fontWeight:'bold',
		color:'black',
		textAlign:'center',
		paddingLeft: 20,
		paddingRight: 20,
	},
	cardContainer:{
		// display: 'flex',
		// justifyContent: 'center',
		margin:'auto',
		backgroundColor: 'green',
		// paddingLeft: 20,
		// paddingRight: 20,
		width:300,
		height:1000,

		// borderRadius: 2,
		borderColor:'black',
		borderWidth: 10,
	},


	cardImage:{
		// flex:1,
		// resizeMode: 'fit',
		display:'inline-block',
		width:30,
		height:30,
		// verticalAlign:'middle',
		padding: '20px 0', // SIMPLY GIVE SAME VERTICAL PADDING
		// margin:'auto',
		// display: 'block',
	},
	textInCard:{
		flex:3,
		// margin:'auto',
		textAlign: 'left',
		// display: 'inline-block'

	},
});


class HeadingOverBoldHeadingOverSixCard extends Component {
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
			<Grid container direction="column" alignItems="center" justify="center" style={{
				backgroundColor: '#F9FBFF', 
				width:'80%', 
				margin:'auto', 
				marginBottom: 50, 
			}} >
				<Grid item xs={12}>
					<div>
						<p className={classes.smallerHeading}>
							{this.props.smallerHeading}
						</p>
						<h1 className={classes.largerHeading}>
							{this.props.largerHeading}
						</h1>
					</div>
				</Grid>

				<Grid container item direction="row">
					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={4}>
						<CardHavingImageOverBoldheadingOverHeading/>
					</Grid>

				</Grid>
			</Grid>

		);
	}
}
	
HeadingOverBoldHeadingOverSixCard.defaultProps = {
	//:,
	smallerHeading:'KEY HEIGHLIGHTS',
	largerHeading:'6 million users. 45 brands. 185 countries',
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverBoldHeadingOverSixCard)));
