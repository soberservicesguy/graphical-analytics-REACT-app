
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
		backgroundColor: 'blue',
		paddingTop: 50,
		paddingBottom: 50,
	},
	topHeading:{
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
	},
	bottomHeading:{
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
	description:{
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
	},
	feedback:{
		margin: 'auto',
		backgroundColor: 'white',
		width: '60%',
		fontSize: 18,
		color: 'grey',
		textAlign: 'center',
		paddingTop: 30,
		paddingBottom: 30,
		marginBottom: 30,
	},
	avatar:{
		borderRadius: '50%',
		width: 60,
		height: 60,
		marginLeft: 200,
		marginRight: 10,
	},
	avatarContainer:{
		display: 'flex',
		alignItems: 'center',
	},
	avatarChild:{
		flex: 1,
	},
	textChild:{
		flex: 4,
	},
	avatarName:{
		marginBottom: 0,
		paddingBottom: 0,
		color: 'white',
		fontWeight: 'bold',
	},
	avatarDesignation:{
		marginBottom: 0,
		paddingBottom: 0,
		color: 'white',
		fontSize: 13,
	}
});


class HeadingOverFeedbackSlides extends Component {
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
			<Grid container direction="column" justify="center" alignItems="center" className={classes.outerContainer}>
				<Grid item xs={12}>
					<div>
						<p className={classes.topHeading}>
							{this.props.topHeading}
						</p>
						<p className={classes.bottomHeading}>
							{this.props.bottomHeading}
						</p>
						<p className={classes.description}>
							{this.props.description}
						</p>						
					</div>
				</Grid>

				<Grid item xs={12}>
					<p className={classes.feedback}>
						{this.props.feedback}
					</p>
					<div className={classes.avatarContainer}>
						<div className={classes.avatarChild}>
							<img src={this.props.image} alt="" className={classes.avatar}/>
						</div>

						<div className={classes.textChild}>
							<p className={classes.avatarName}>
								{this.props.avatarName}
							</p>
							<p className={classes.avatarDesignation}>
								{this.props.avatarDesignation}
							</p>
						</div>
					</div>
				</Grid> 
			</Grid>
		);
	}
}
	
HeadingOverFeedbackSlides.defaultProps = {
	//:,
	topHeading: 'FEEDBACK',
	bottomHeading: 'Clients loved the products',
	description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	image: require('../images/samosa.jpeg'),
	avatarName: 'Jack Leo',
	avatarDesignation: 'CEO, Company',
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverFeedbackSlides)));
