import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({ robots })
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {

		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.userName.toLowerCase().includes(searchfield.toLowerCase()) || robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
			<h1 className='f1 tc'>LOADING...</h1> :

			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<scroll>
					<CardList robots={filteredRobots} />
				</scroll>
			</div>
	}
}

export default App;