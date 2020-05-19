import React, { useState } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import CodeCreate from './components/CodeCreate/codeCreate';
import Navbar from './components/Navbar/Navbar';
import CodeInfo from './components/CodeInfo/codeInfo';
import CodeEdit from './components/CodeEdit/codeEdit';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
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

	const [searchString, setSearchString] = useState('');

	return (
		<>
			{/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
			{/* <ThemeProvider theme={theme}> */}
			{/* <CssBaseline /> */}
			<Route
				path='*'
				render={() => {
					return (
						<Navbar
							searchString={searchString}
							setSearchString={setSearchString}
						/>
					);
				}}
			/>
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<Home
								searchString={searchString}
								setSearchString={setSearchString}
							/>
						);
					}}
				/>
				<Route path='/create' component={CodeCreate} />
				<Route
					exact
					path='/code/:id'
					render={(routerProps) => {
						return <CodeInfo codeId={routerProps.match.params.id} />;
					}}
				/>
				<Route
					exact
					path='/code/:id/edit'
					render={(routerProps) => {
						return <CodeEdit codeId={routerProps.match.params.id} />;
					}}
				/>
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/login' component={Login} />
			</Switch>
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
