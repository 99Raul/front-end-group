import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Business, GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250,
		},
		'& .MuiSvgIcon-root': {
			fill: 'black',
			'&:hover': {
				fontSize: '1.8rem',
			},
		},
	},
});

function Footer(props) {
	const classes = useStyles();
	return (
		<BottomNavigation width='auto' style={{ background: '#DDDDDD' }}>
				<BottomNavigationAction
					className={classes.root}
					style={{ padding: 0 }}
					icon={<Business />}
				/>
			
			
				<BottomNavigationAction
					className={classes.root}
					style={{ padding: 0 }}
					icon={<GitHub />}
				/>
			
		</BottomNavigation>
	);
}

export default Footer;
