import React, { useState } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import CodeCreate from './components/CodeCreate/codeCreate';
import Navbar from './components/Navbar/Navbar';
import CodeInfo from './components/CodeInfo/codeInfo';
import CodeEdit from './components/CodeEdit/codeEdit';
import { Route, Switch } from 'react-router-dom';
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
			{/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
			{/* <ThemeProvider theme={theme}> */}
			{/* <CssBaseline /> */}
			<Route path='*' component={Navbar} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/create' component={CodeCreate} />
				<Route exact path='/show/:id' component={CodeInfo} />
				<Route exact path='/:id/edit' component={CodeEdit} />
			</Switch>
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
