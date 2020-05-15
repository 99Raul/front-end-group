import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
} from '@material-ui/core';

import {
	ArrowBack,
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	Bookmark,
	Inbox,
} from '@material-ui/icons';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: '#DDDDDD',
		height: '30rem',
	},
	// avatar : {
	// 	display: "block",
	// 	margin: "0.5rem auto",
	// 	width: theme.spacing(13),
	// 	height:theme.spacing(13)
	// }
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
	},
	{
		listIcon: <Bookmark />,
		listText: 'random1',
	},
	{
		listIcon: <Inbox />,
		listText: 'random1',
	},
];

function Navbar() {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.menuSliderContainer} component='div'>
				{/* <Avatar  className={classes.avatar} src='' alt='' /> */}
				<Divider />
				<List>
					{menuItems.map((isItem, key) => (
						<ListItem button key={key}>
							<ListItemIcon>{isItem.listIcon}</ListItemIcon>
							<ListItemText primary={isItem.listText} />
						</ListItem>
					))}
				</List>
			</Box>
			<Box component='nav'>
				<AppBar position='static' style={{ background: '#0074D9' }}>
					<Toolbar>
						<IconButton>
							<ArrowBack style={{ color: '#FFFFFF' }} />
						</IconButton>
						<Typography variant='h5' style={{ color: '#FFFFFF' }}>
							Random
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar;
