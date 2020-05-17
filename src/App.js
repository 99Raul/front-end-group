import React, { useState } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import CreateCode from './components/CreateCode/createCode';
import Navbar from './components/Navbar/Navbar';
import CodeInfo from './components/CodeInfo/codeInfo';
import { Route, Link, Switch } from 'react-router-dom';
// import Switch from '@material-ui/core/Switch';

// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Theme Provider has to always be on top or wrapped tags
function App() {
	// const [darkMode, setDarkMode] = useState(false);

	// const theme = createMuiTheme({
	// 	palette: {
	// 		type: darkMode ? 'dark' : 'light',
	// 	},
	// });

	return (
		<>
			<header>
				<Link to='/create'>Create New Code</Link>
			</header>
			{/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
			{/* <ThemeProvider theme={theme}> */}
			{/* <CssBaseline /> */}
			<Route path='*' component={Navbar} />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/create' component={CreateCode} />
				<Route path='/:id' component={CodeInfo} />
				<Route path='/:id/edit' />
			</Switch>
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
