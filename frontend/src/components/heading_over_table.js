
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
	topHeading:{
		textAlign: 'center',
		fontSize: 18,
	},
	bottomHeading:{
		textAlign: 'center',
		fontSize: 22,
	},
	listItems:{
		fontSize: 18,
		height: 50,
	},
	leftListContainer:{
		textAlign: 'center',
		listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
	},
	centerListContainer:{
		listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
		textAlign: 'center',
	},
	rightListContainer:{
		listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
		textAlign: 'center',
	},
	topButton:{
		width: '100%',
		border:'none',
		backgroundColor: 'blue',
		color:'white',
		height:50,
		padding:'15px 20px 15px 20px',
		marginTop:30,
		marginBottom: 30,
	},

});


class HeadingOverTable extends Component {
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
			<Grid container direction="column" justify="center" alignItems="center" style={{
				boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.09)',				
				backgroundColor: '#F9FBFF', 
				width:'90%', 
				margin:'auto', 
				marginBottom: 50, 
				marginTop: 50,
			}}>
				<Grid item xs={12}>
					<div>
						<p className={classes.topHeading}>
							{this.props.topHeading}
						</p>
						<p className={classes.bottomHeading}>
							{this.props.bottomHeading}
						</p>
					</div>
				</Grid>

				<Grid item container direction="row" justify="center" alignItems="center" style={{width:'90%', margin:'auto'}}>					
					<Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
						<button className={classes.topButton} >
							LEAD CHANNEL
						</button>
						<ul className={classes.leftListContainer}>
							{this.props.listOnLeft.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
						<button className={classes.topButton} >
							TOTAL LEADS
						</button>
						<ul className={classes.centerListContainer}>
							{this.props.listOnCenter.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
						<button className={classes.topButton} >
							LEAD TO SCALE
						</button>
						<ul className={classes.rightListContainer}>
							{this.props.listOnRight.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 
				</Grid>
			</Grid>
		);
	}
}
	
HeadingOverTable.defaultProps = {
	//:,
	listOnLeft:['Event XYZ', 'FB retargeting ads', 'Google AdWords', 'Organic search', 'YouTube video'],
	listOnCenter:['11,000', '4,500', '4,500', '10,500', '3,500' ],
	listOnRight:[691, 938, 1120, 1110, 1167,],
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverTable)));
