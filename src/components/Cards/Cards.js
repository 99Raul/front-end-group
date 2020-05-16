import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 200,
	},
	title: {
		fontSize: 14,
	},
});

function OutlineCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom>
					User
				</Typography>
				<Typography variant='h5' component='h2'>
					Question
				</Typography>
				<br />
				<Typography variant='body2' component='p'>
					Question description?
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>More</Button>
			</CardActions>
		</Card>
	);
}

export default OutlineCard;
