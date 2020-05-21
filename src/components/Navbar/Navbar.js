import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileLeftMenuSlider from '@material-ui/core/Drawer';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Divider,
	List,
	Typography,
	Box,
} from '@material-ui/core';

import { Menu, Home, People, AssignmentInd } from '@material-ui/icons';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: '#DDDDDD',
		height: '100%',
	},
	listTextColor: {
		color: '#000000',
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/',
	},
	{
		listIcon: <People />,
		listText: 'Create Code',
		listPath: '/create',
	},
];

function Navbar(props) {
	const [state, setState] = useState({
		left: false,
	});
	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};

	const classes = useStyles();

	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggleSlider(slider, false)}>
			<Divider />

			<List>
				{menuItems.map((isItem, key) => (
					<ListItem button key={key} component={Link} to={isItem.listPath}>
						<ListItemIcon className={classes.listTextColor}>
							{isItem.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.listTextColor}
							primary={isItem.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component='nav'>
				<AppBar position='static' style={{ background: '#0074D9' }}>
					<Toolbar>
						<IconButton onClick={toggleSlider('left', true)}>
							<Menu style={{ color: '#FFFFFF' }} />
						</IconButton>
						<Searchbar
							searchString={props.searchString}
							setSearchString={props.setSearchString}
						/>
						<Typography variant='h5' style={{ color: '#FFFFFF' }}></Typography>
						<MobileLeftMenuSlider
							anchor='left'
							open={state.left}
							onClose={toggleSlider('left', false)}>
							{sideList('left')}
							<Footer />
						</MobileLeftMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar;
