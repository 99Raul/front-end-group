import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
			display: 'flex',
			alignItems: 'right',
			marginRight: '100px',
		},
	},
}));
function SearchField() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<TextField id='standard-basic' label='Search' />
		</form>
	);
}

export default SearchField;
