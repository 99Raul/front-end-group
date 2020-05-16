import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
			position:'relative',
			padding:"2px 20px 8px 1px",
			display:"flex"
			
			
			
			
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
