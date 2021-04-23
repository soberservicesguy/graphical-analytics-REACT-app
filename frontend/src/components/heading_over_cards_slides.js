
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
	cardContainer:{
		borderStyle: 'solid', // 'dotted'
		borderWidth: '1px',
		borderColor: '#eee',
		borderRadius: 10,
	},
	topHeading:{
		marginTop: 70,
		textAlign: 'center',
		color: 'cyan',
		fontSize: 20,
	},
	bottomHeading:{
		textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
	},
	cardImage:{
		width: '100%',
		height: 250,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	cardHeading:{
		paddingTop:30,
		paddingLeft:30,
		fontSize: 25,
		fontWeight: 'bold',
	},
	cardText:{
		paddingLeft:30,		
		fontSize: 18,
		color: 'grey',
		paddingBottom: 10,
	},
});


class HeadingOverCardsSlides extends Component {
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
			<Grid container direction="column" justify="center" alignItems="center" style={{width:'90%', margin:'auto'}}>					
				<Grid item xs={12}>
					<p className={classes.topHeading}>
						{this.props.topHeading}
					</p>
					<p className={classes.bottomHeading}>
						{this.props.bottomHeading}
					</p>
				</Grid>

				<Grid container item xs={12} direction="row" justify="center" alignItems="center">					
					{this.props.cardsDetailsList.map((cardDetail)=>(
						<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
							<div className={classes.cardContainer} >
								<img src={cardDetail.image} alt="" className={classes.cardImage}/>
								<p className={classes.cardHeading}>
									{cardDetail.cardHeading}
								</p>
								<p className={classes.cardText}>
									{cardDetail.cardText}
								</p>
							</div>
						</Grid>
					))}
				</Grid>
			</Grid>
		);
	}
}
	
HeadingOverCardsSlides.defaultProps = {
	//:,
	cardsDetailsList:[
		{image: require('../images/samosa.jpeg'), cardHeading:'Reporting Tools 2020', cardText:'Print-Branding'},
		{image: require('../images/samosa.jpeg'), cardHeading:'Reporting Tools 2020', cardText:'Print-Branding'},
		{image: require('../images/samosa.jpeg'), cardHeading:'Reporting Tools 2020', cardText:'Print-Branding'},
	],
	topHeading: 'PORTFOLIO',
	bottomHeading: 'Our case studies',
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverCardsSlides)));