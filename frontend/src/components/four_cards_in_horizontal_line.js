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


import { 
	ArrowUpward,
	ArrowDownward,
} from '@material-ui/icons';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
			[theme.breakpoints.up('sm')]:{
		paddingLeft:100
		},
	},
	outerContainer:{
		marginTop: props => props.upperDisplacement,
		borderBottomLeftRadius:7,
		borderBottomRightRadius:7,
		borderWidth: 1,
		borderStyle:'solid',
		borderColor:'white',
		paddingTop: 25,
		paddingBottom: 25,
		marginBottom:20,
		backgroundColor:'white',
		boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.09)',
	},
	cardImage:{
		display: 'block',
		margin: 'auto',
		marginTop:10,
		borderRadius: '50%'
	},
	cardHeading:{
		fontSize:30,
		fontWeight:'bold',
		textAlign:'center',
		marginTop:10,
	},
	cardText:{
		fontSize:20,
		textAlign:'center',
		color:'#grey'
	},
});


class FourCardsInHorizontalLine extends Component {
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
			<Grid container item direction="row" alignItems="center" justify="center" style={{
				backgroundColor: '#F9FBFF', 
				width:'90%', 
				margin:'auto', 
				marginBottom: 50, 
				marginTop: 50,

				position: (this.props.containerVerticalOffset !== 0) ? 'relative' : 'inherit',
				top: this.props.containerVerticalOffset,
				height: 200,
			}} >
				{this.props.cardsDetailsList.map((cardsDetails)=>(
					<Grid item xs={12} sm={6} md={3} lg={3}>
						<div className={classes.outerContainer}>
							<img src={cardsDetails.image} alt="" width="100" height="100" className={classes.cardImage}/>
							<p className={classes.cardHeading}>
								{cardsDetails.cardHeading}
							</p>
							<p className={classes.cardText}>
								{cardsDetails.cardText.about}<br/>
								{
									(cardsDetails.cardText.change_type === 'increased')
									?
									<> 	
										<span style={{color:'green'}}><ArrowUpward/>{cardsDetails.cardText.precentage}</span>
									</>
									:
									<>
										<span style={{color:'red'}}><ArrowDownward/>{cardsDetails.cardText.precentage}</span>
									</>
								}
								<span> </span>{cardsDetails.cardText.change_type}
							</p>
						</div>
					</Grid>
				))}
			</Grid>

		);
	}
}
	
FourCardsInHorizontalLine.defaultProps = {
	//:,
	containerVerticalOffset: 0,
	cardsDetailsList:[
		{
			cardHeading:'71.5 K',
			cardText: {about:'Users', precentage: '12%', change_type:'increased' },
			image: require('../images/samosa.jpeg')
		},
		{
			cardHeading:'90.5 K',
			cardText: {about:'Sessions', precentage: '15%', change_type:'decreased' },
			image: require('../images/samosa.jpeg')
		},
		{
			cardHeading:'65.4 K',
			cardText: {about:'Rate', precentage: '10%', change_type:'increased' },
			image: require('../images/samosa.jpeg')
		},
		{
			cardHeading:'5.4 K',
			cardText: {about:'Conversion', precentage: '8%', change_type:'increased' },
			image: require('../images/samosa.jpeg')
		},
	]
};

export default withRouter(withResponsiveness(withStyles(styles)(FourCardsInHorizontalLine)));