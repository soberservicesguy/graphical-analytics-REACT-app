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
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,

		borderStyle: 'solid',
		borderWidth: '1px',
		padding: 10,
		marginLeft: 10,
		marginRight: 10,
		borderColor: 'black',
		borderRadius: 10,
	},
	imageChild:{
		flex: 1,
		[theme.breakpoints.up('lg')]:{
			marginLeft:25,
		},
		[theme.breakpoints.up('md')]:{
			marginLeft:10,
		},
		[theme.breakpoints.up('sm')]:{
			marginLeft:50,
		},
		[theme.breakpoints.up('xs')]:{
			marginLeft:30,
		},

	},
	textChild:{
		flex: 3,
	},
	cardImage:{
		// marginLeft:40,
		width: 50,
		height: 50,
		objectFit: 'cover', // 'fill' | 'contain' | 'none'
	},
	cardText:{
		textAlign:'left',
		color:'#grey',
		fontSize: 30,
		fontWeight: 'bold',
		marginTop:0,
		marginBottom:0
	},
});


class CardHavingImageAndText extends Component {
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
				<div className={classes.imageChild}>
					<img src={this.props.image} alt="" className={classes.cardImage} />
				</div>

				<div className={classes.textChild}>
					<p className={classes.cardText}>
						{this.props.cardText}
					</p>					
				</div>
			</div>
		);
	}
}
	
CardHavingImageAndText.defaultProps = {
	//:,
	cardText:'Product',
	image:require('../images/samosa.jpeg')
};

export default withRouter(withResponsiveness(withStyles(styles)(CardHavingImageAndText)));
