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

import { Menu, Home, People, Create } from '@material-ui/icons';

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

function Navbar(props) {
	const [state, setState] = useState({
		left: false,
	});
	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};

	const classes = useStyles();

	const sideListPre = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggleSlider(slider, false)}>
			<Divider />

			<List>
				<ListItem button component={Link} to='/' onClick={props.handleLogin}>
					<ListItemIcon>
						<People />
					</ListItemIcon>
					<ListItemText className={classes.listTextColor} primary='Login' />
				</ListItem>
				<ListItem button component={Link} to='/' onClick={props.handleSignUp}>
					<ListItemIcon>
						<People />
					</ListItemIcon>
					<ListItemText className={classes.listTextColor} primary='Sign Up' />
				</ListItem>

				<ListItem button component={Link} to='/'>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText className={classes.listTextColor} primary='Home' />
				</ListItem>
			</List>
		</Box>
	);

	const sideListPost = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggleSlider(slider, false)}>
			<Divider />

			<List>
				<ListItem button component={Link} to='/'>
					<ListItemIcon>
						<People />
					</ListItemIcon>
					<ListItemText
						className={classes.listTextColor}
						primary={props.authToken.username}
					/>
				</ListItem>

				<ListItem button component={Link} to='/'>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText className={classes.listTextColor} primary='Home' />
				</ListItem>

				<ListItem button component={Link} to='/create'>
					<ListItemIcon>
						<Create />
					</ListItemIcon>
					<ListItemText
						className={classes.listTextColor}
						primary='Create Code'
					/>
				</ListItem>
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
							{props.authToken === ''
								? sideListPre('left')
								: sideListPost('left')}
							<Footer />
						</MobileLeftMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar;
