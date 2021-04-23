import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";

// IMPORT CONNECTED CONTAINERS
import {

} from "../redux_stuff/connected_components";

// IMPORT CONNECTED COMPONENTS
import {
} from "../redux_stuff/connected_components"

// IMPORT CONTAINERS
import {
	HomeContainer,
	DetailedAnalyticsContainer,
} from "./";

// IMPORT material-ui stuff
// import { withStyles } from '@material-ui/styles';
import { Grid, Button } from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";



class RootRouterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl:null,
			mobileMoreAnchorEl:null,
		}

	}

	render() {

		const styles = {

		}

		return (
			<Router>

				<div>
					<Switch>
						<Route exact path="/">
							<HomeContainer/>
						</Route>

						<Route exact path="/detailed_analytics">
							<DetailedAnalyticsContainer/>
						</Route>
					</Switch>
				</div>

			</Router>
		);
	}
}


export default withResponsiveness(RootRouterContainer);
// export default RootRouterContainer;