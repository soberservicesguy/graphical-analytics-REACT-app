
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

import { IconButton } from '@material-ui/core';
import { 
	Facebook, 
	Twitter,
	Instagram,
	LinkedIn,
	YouTube,
	AccountCircle, 
} from '@material-ui/icons';

import { PlayState, Tween, Reveal } from 'react-gsap';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		},
	},
	iconStyle:{
		width:50,
		height:50,
	},
	// iconButton:{
	// 	paddingLeft:0,
	// 	paddingRight:0,
	// 	marginLeft:0,
	// 	marginRight:10,		
	// },
	upperCentralIcon:{
		color:'blue',
	},
	upperLeftIcon:{
		color:'blue',
	},
	upperRightIcon:{
		color:'cyan',
	},
	lowerLeftIcon:{
		color:'blue',
	},
	lowerRightIcon:{
		color:'green',
	},
	lowerCentralIcon:{
		color:'red',
	},
	centralImage:{
		width:100,
		height:100,
		position: 'relative',
		top: -350,
		left: 150,
		borderRadius: '50%'
	}
});


class IconsOverTextInCircle extends Component {
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
			<div>
				<Reveal>
					<Tween 
						to={{ rotation: 360, repeat:-1 }}
						ease="none" // 'none' for no ease
						duration={5}
					>
						<div style={{
							height:400,
							width:400,
							padding:0,
							margin:0,
							position: 'relative',
							top: 200
						}}>				
							<svg width="400" height="400">
								<circle 
									cx="200" cy="200" r="200" 
									stroke="grey" 
									stroke-width="2" 
									fill="transparent" // "transparent"
									stroke-linecap="butt" // "round" | "square"
									stroke-dasharray="10,10" // stroke-gap-pairs pattern can also be "20,10,5,5,5,10"
								/>
						
								<circle 
									cx="200" cy="200" r="100" 
									stroke="grey" 
									stroke-width="1" 
									fill="transparent" // "transparent"
									stroke-linecap="butt" // "round" | "square"
									stroke-dasharray="2,2" // stroke-gap-pairs pattern can also be "20,10,5,5,5,10"
								/>
							</svg>

						</div>
					</Tween>
				</Reveal>
				
				<div style={{
					position: 'relative',
					top: -240,
					left: 160,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.upperCentralIcon} onClick={() => { alert('clicked') }}><Facebook className={classes.iconStyle}/></IconButton>
				</div>			
				<div style={{
					position: 'relative',
					top: -200,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.upperLeftIcon} onClick={() => { alert('clicked') }}><Twitter className={classes.iconStyle}/></IconButton>
				</div>			
				
				<div style={{
					position: 'relative',
					top: -20,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.upperRightIcon} onClick={() => { alert('clicked') }}><Instagram className={classes.iconStyle}/></IconButton>
				</div>			
				
				<div style={{
					position: 'relative',
					top: -70,
					left: 330,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.lowerLeftIcon} onClick={() => { alert('clicked') }}><LinkedIn className={classes.iconStyle}/></IconButton>
				</div>			

				<div style={{
					position: 'relative',
					top: -350,
					left: 330,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.lowerRightIcon} onClick={() => { alert('clicked') }}><AccountCircle className={classes.iconStyle}/></IconButton>
				</div>			

				<div style={{
					position: 'relative',
					top: -90,
					left: 160,
					width:50,
					height:50,
				}}>	
					<IconButton className={classes.lowerCentralIcon} onClick={() => { alert('clicked') }}><YouTube className={classes.iconStyle}/></IconButton>
				</div>

				<div>
					<img src={this.props.centralImage} alt="" className={classes.centralImage}/>
				</div>
			</div>

		);
	}
}
	
IconsOverTextInCircle.defaultProps = {
	//:,
	centralImage: require('../images/samosa.jpeg')
};

export default withRouter(withResponsiveness(withStyles(styles)(IconsOverTextInCircle)));