import React from 'react';
import Navbar from './Navbar/Navbar';
import Card from './Cards/Cards';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	gridContainer: {
		paddingLeft: '40px',
		paddingRight: '40px',
		paddingTop: '10px',
	},
});

function Home(props) {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Grid
				container
				spacing={4}
				className={classes.gridContainer}
				justify='center'>
				<Grid item xs={12} sm={6} md={4}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card />
				</Grid>
			</Grid>
		</>
	);
}

export default Home;
