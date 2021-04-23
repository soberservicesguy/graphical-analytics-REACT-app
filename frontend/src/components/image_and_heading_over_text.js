
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

  cardImage:{
  	width: 100,
  	height: 100,
  	borderRadius: '50%',
  	margin: 'auto', // halign
  	display: 'block',
  },
  heading:{
  	fontWeight: 'bold',
  	fontSize: 25,
  },
  text:{
  	fontSize: 20,
  	color: 'grey'
  }
});


class ImageAndHeadingOverText extends Component {
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
			<Grid container direction="row" justify="center" alignItems="center" style={{backgroundColor: 'white', height: 200, marginBottom: 50}}>					
				<Grid item xs={12} sm={12} md={2} lg={2}>
					<img src={this.props.image} alt="" className={classes.cardImage}/>
				</Grid>
				<Grid item xs={12} sm={12} md={10} lg={10} style={{paddingLeft:50}}>
					<p className={classes.heading}>
						Leads Generation
					</p>
					<p className={classes.text}>
						Lorem Ipsum is simply dummy text of the printing and typesetting.
					</p>
				</Grid>
			</Grid>
		);
	}
}
	
ImageAndHeadingOverText.defaultProps = {
	//:,
	image: require('../images/samosa.jpeg')
};

export default withRouter(withResponsiveness(withStyles(styles)(ImageAndHeadingOverText)));
