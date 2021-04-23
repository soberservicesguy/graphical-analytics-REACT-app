
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
		backgroundColor:'white'
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


class CardInDisplacedStyle extends Component {
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
			<div className={classes.outerContainer}>
				<img src={this.props.image} alt="" width="100" height="100" className={classes.cardImage}/>
				<p className={classes.cardHeading}>
					{this.props.cardHeading}
				</p>
				<p className={classes.cardText}>
					{this.props.cardText}
				</p>

			</div>
		);
	}
}
	
CardInDisplacedStyle.defaultProps = {
	//:,
	cardHeading:'Product',
	cardText:'Lorem ipsum dolor sit amet, consectetur elit.',
	image:require('../images/samosa.jpeg')
};

export default withRouter(withResponsiveness(withStyles(styles)(CardInDisplacedStyle)));
