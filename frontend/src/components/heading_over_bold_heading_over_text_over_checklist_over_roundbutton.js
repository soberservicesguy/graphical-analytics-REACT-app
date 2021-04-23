
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
	    color: props => (props.cool) ? 'red' : 'black',
	    [theme.breakpoints.up('sm')]:{
	    	paddingLeft:100
	    },
	},
	topHeading:{
		fontSize: 18,
		color: 'blue'
	},
	bottomHeading:{
		fontSize: 40,
		fontWeight: 'bold',
	},
	description:{
		fontSize: 18,
		color: 'grey'
	},
	unorderedList: {
		listStyleType: 'circle', // 'circle' | 'square' | 'disc' | 'decimal' 
		// listStyleImage: url('../images/samosa.jpeg');
	},
	listItems:{
		color: 'grey',
		fontSize: 18,
	},
	roundButton:{
		border:'none',
		backgroundColor: 'blue',
		color:'white',
		height:55,
		padding:'15px 20px 15px 20px',
		marginTop:30,
		borderRadius:55/2,
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


class HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton extends Component {
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
			<Grid container direction="column" justify="center" alignItems="center">
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
				<Grid item container direction="row" justify="center" alignItems="center">					
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<ul>
							{this.props.listOnLeft.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<ul>
							{this.props.listOnRight.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12}>
						<button className={classes.roundButton}>
							{this.props.buttonText}
							<div className={classes.inlineCircle}></div>
						</button>
					</Grid> 
				</Grid>
			</Grid>

		);
	}
}
	
HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton.defaultProps = {
	//:,
	topHeading: 'SUMMARY OF MONTH',
	bottomHeading: 'Sales revenue distribution tracked monthly',
	description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	listOnLeft: ['Boost SEO ranking', 'Marketing', 'Visual Reviews', ],
	listOnRight: ['Marketing', 'Visual Reviews', 'Boost SEO ranking', ],
	buttonText: 'Read More',
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton)));
