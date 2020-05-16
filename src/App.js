import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Bookmark from './components/Bookmarks/Bookmark';
import { Route } from 'react-router-dom';
import Users from './components/Users.js/Users';

function App() {
	return (
		<>
			<CssBaseline />
			<Route exact path='/' component={Home} />
			<Route path='/bookmark' component={Bookmark} />
			<Route path='/users' component={Users} />
		</>
	);
}

export default App;
