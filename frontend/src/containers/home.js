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
	HeadingOverTextOverRoundbutton,
	RevolvingProgressBarsGraph,
	CardsPlacedWithVerticalDisplacement,
	// HeadingOverBoldHeadingOverCard,
	HeadingOverBoldHeadingOverFourCard,
	HeadingOverBoldHeadingOverSixCard,
	HeadingOverThreeCardsAndIconsInCircle,
	PiechartWithHoleGraph,
	HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton,
	SmoothLineGraph,
	HeadingOverTable,
	HeadingOverFeedbackSlides,
	HeadingOverCardsSlides,
	FooterSection,
} from "../components";


const styles = theme => ({
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
});



class HomeContainer extends Component {
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
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={6} lg={4}>
						<HeadingOverTextOverRoundbutton/>
					</Grid>
					
					<Grid item xs={12} sm={12} md={6} lg={4} style={{height:400}}>
						<RevolvingProgressBarsGraph
							translate={'translate(100px, 100px)'}
						/>
						<div style={{position:'relative', top: -400 // 400 is RevolvingProgressBarsGraph size
						}}>
							<RevolvingProgressBarsGraph
								translate={'translate(-500px, 0px)'}
							/>
						</div>
						<div style={{position:'relative', top: -800}}>
							<RevolvingProgressBarsGraph
								translate={'translate(300px, -500px)'}
							/>
						</div>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={6} lg={4}>
						<HeadingOverTextOverRoundbutton/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={4}>
						<CardsPlacedWithVerticalDisplacement/>
					</Grid>
				</Grid>

				<Grid container item xs={12} sm={12} md={12} lg={12}>
					<HeadingOverBoldHeadingOverFourCard/>
				</Grid>

				<Grid container item xs={12} sm={12} md={12} lg={12}>
					<HeadingOverBoldHeadingOverSixCard/>
				</Grid>

				<Grid container item xs={12} sm={12} md={12} lg={12} style={{margin:'auto', width:'90%'}}>
					<HeadingOverThreeCardsAndIconsInCircle/>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" style={{margin:'auto', width:'90%'}}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<PiechartWithHoleGraph/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" style={{margin:'auto', width:'90%'}}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton
							topHeading= {'Sales Analysis'}
							bottomHeading= {'Sales Analysis & Create With Them'}
							description= {'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
							listOnLeft= {['Pipeline', 'Conversion rates', 'Visual Reviews', ]}
							listOnRight= {['Average deal size', 'Marketing', 'Average sales cycle', ]}
							buttonText= {'Sales Report'}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<SmoothLineGraph
							graphHeight={280}
							legendVerticalOffset={-50}
						/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<HeadingOverTable/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<HeadingOverFeedbackSlides/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<HeadingOverCardsSlides/>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<FooterSection/>
					</Grid>
				</Grid>


			</div>
		);
	}
}


export default withResponsiveness(withStyles(styles)(HomeContainer));
// export default RootRouterContainer;
