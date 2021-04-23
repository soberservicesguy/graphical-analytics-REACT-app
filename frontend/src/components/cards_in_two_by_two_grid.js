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
	outerContainer:{
		backgroundColor: 'white',
		height: 220,
		paddingTop: 50,
		paddingBottom: 50,
		boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 6px 12px 0 rgba(0, 0, 0, 0.045)',
		borderRadius: 5,
	},
	cardImage:{
		width: 50,
		height: 50,
		objectFit: 'cover', // 'fill' | 'contain' | 'none'
		margin: 'auto', // halign
		display: 'block',
	},
	boldHeading:{
		textAlign:'center',
		color:'#black',
		fontSize: 35,
		fontWeight: 'bold',
		marginTop:0,
		marginBottom:0
	},
	smallerHeading:{
		textAlign:'center',
		color:'grey',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop:0,
		marginBottom:0
	},

});


class CardsInTwoByTwoGrid extends Component {
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
			<Grid container direction="column" alignItems="center" justify="center">
				<Grid container item direction="row" spacing={2}>
					{this.props.cardsDetailsList.map((cardsDetails)=>(
						<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
							<div className={classes.outerContainer}>
								<img src={cardsDetails.image} alt="" className={classes.cardImage} />	
								<p className={classes.boldHeading}>
									{cardsDetails.boldHeading}
								</p>					
								<p className={classes.smallerHeading}>
									{cardsDetails.smallerHeading}
								</p>					

							</div>
						</Grid>
					))}
				</Grid>
			</Grid>

		);
	}
}
	
CardsInTwoByTwoGrid.defaultProps = {
	//:,
	cardsDetailsList:[
		{
			image: require('../images/samosa.jpeg'),
			boldHeading: '21000 +',
			smallerHeading: 'Leads',
		},
		{
			image: require('../images/samosa.jpeg'),
			boldHeading: '21000 +',
			smallerHeading: 'Leads',
		},
		{
			image: require('../images/samosa.jpeg'),
			boldHeading: '21000 +',
			smallerHeading: 'Leads',
		},
		{
			image: require('../images/samosa.jpeg'),
			boldHeading: '21000 +',
			smallerHeading: 'Leads',
		},				
	]
};

export default withRouter(withResponsiveness(withStyles(styles)(CardsInTwoByTwoGrid)));
