import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Bookmark from './components/Bookmarks/Bookmark';
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom';
import Users from './components/Users.js/Users';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Theme Provider has to always be on top or wrapped tags
function App() {
	const [darkMode, setDarkMode] = useState(false);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? 'dark' : 'light',
		},
	});

	return (
		<>
			<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Route exact path='/' component={Home} />
				<Route path='/bookmark' component={Bookmark} />
				<Route path='/users' component={Users} />
			</ThemeProvider>
		</>
	);
}

export default App;
