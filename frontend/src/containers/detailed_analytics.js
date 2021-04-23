import React, {Component} from 'react';
import PropTypes from 'prop-types';

// IMPORT CONNECTED CONTAINERS
import {

} from "../redux_stuff/connected_components";

// IMPORT CONNECTED COMPONENTS
import {

} from "../redux_stuff/connected_components"

// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	Button 
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

// IMPORT COMPONENTS
import {
	FourCardsInHorizontalLine,
	AreaGraph,
	SmoothLineGraph,
	BarChartGraph,
	MonthlyHorizontalProgressBars,
	HeadingOverTable,
	HeadingOverTextOverRoundbutton,
	CardsInTwoByTwoGrid,
	FooterSection,
	PiechartWithHoleGraph,
} from "../components";

const styles = theme => ({
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
});



class DetailedAnalyticsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {

	    const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props


		return (
			<div style={{backgroundColor: '#F9FBFF'}}>
				<Grid item xs={12}>
					<FourCardsInHorizontalLine/>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" style={{
					backgroundColor: '#F9FBFF', 
					width:'90%', 
					margin:'auto', 
					marginBottom: 50, 
					marginTop: 50,
				}} >
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<AreaGraph/>
					</Grid>
					
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<SmoothLineGraph
							graphHeight={350}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={4} lg={4}>
						<BarChartGraph
							graphHeight={400}
							graphWidth={400}
						/>
					</Grid>
				</Grid>


				<Grid container direction="row" justify="center" alignItems="center" style={{
					backgroundColor: '#F9FBFF', 
					width:'90%', 
					margin:'auto', 
					marginBottom: 50, 
					marginTop: 50,
				}} >
					<Grid item xs={12} sm={12} md={8} lg={8}>
						<SmoothLineGraph
							graphHeight={280}
							legendVerticalOffset={-100}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={4} lg={4}>
						<MonthlyHorizontalProgressBars/>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<HeadingOverTable/>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" style={{
					backgroundColor: '#F9FBFF', 
					width:'90%', 
					margin:'auto', 
					marginBottom: 50, 
					marginTop: 50,
				}} >
					<Grid item xs={12} sm={12} md={6} lg={6} >
						<PiechartWithHoleGraph
							graphWidth={400}
							graphHeight={400}
							svgWidth={400}
							svgHeight={400}
							legendVerticalOffset={-70}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6} >
						<BarChartGraph
							graphHeight={400}
							graphWidth={400}
							legendVerticalOffset={-70}
						/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" style={{
					backgroundColor: '#F9FBFF', 
					width:'90%', 
					margin:'auto', 
					marginBottom: 200, 
					marginTop: 50,
				}} >
					<Grid item xs={12} sm={12} md={6} lg={6} style={{height:400}}>
						<HeadingOverTextOverRoundbutton/>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>
						<CardsInTwoByTwoGrid/>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<FooterSection/>
				</Grid>
			</div>
		);
	}
}

export default withResponsiveness(withStyles(styles)(DetailedAnalyticsContainer));