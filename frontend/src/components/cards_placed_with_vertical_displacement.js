
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
// IMPORT COMPONENTS
import {
	CardInDisplacedStyle,
} from "./";

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});


class CardsPlacedWithVerticalDisplacement extends Component {
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
			// <div>
				<Grid container direction="row" alignItems="center" justify="center">
					<Grid container item direction="column" xs={12} sm={12} md={6} lg={6} >
						<Grid item>
							<CardInDisplacedStyle
								cardHeading={'Product'}
								// image={}
							/>
						</Grid>

						<Grid item>
							<CardInDisplacedStyle
								cardHeading={'Strategy'}
								// image={}
							/>
						</Grid>
					</Grid>

					<Grid container item direction="column" xs={12} sm={12} md={6} lg={6} >
						<Grid item>
							<CardInDisplacedStyle
								upperDisplacement={100}
								cardHeading={'Operations'}
								// image={}
							/>
						</Grid>

						<Grid item>
							<CardInDisplacedStyle
								cardHeading={'Analysis'}
								// image={}
							/>
						</Grid>
					</Grid>
				</Grid>
			// </div>
		);
	}
}
	
CardsPlacedWithVerticalDisplacement.defaultProps = {
	//:,
};

export default withRouter(withResponsiveness(withStyles(styles)(CardsPlacedWithVerticalDisplacement)));
