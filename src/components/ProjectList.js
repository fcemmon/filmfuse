import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class ProjectList extends Component {

	componentDidMount() {
		this.props.store.fetchData();
	}
 
	filter(e) {
		this.props.store.filter = e.target.value;
	}

	createNew(e) {
		if(e.which === 13) {
			this.props.store.createProject(e.target.value);
			e.target.value = '';
		}
	}

	render() {
		const { filter, filteredProjects, projects, fetched } = this.props.store;

		const projectLis = filteredProjects.map(project => (
			<li key={project.id}>{project.name}</li>
		));

		return (
		<div>
			<h2>Project List</h2>
			<div>Fetched: {fetched}</div>
			<div>New: <input className="create" onKeyPress={this.createNew.bind(this)} /></div>
			<div>Filter: <input className="filter" value={filter} onChange={this.filter.bind(this)} /></div>
			<ul>{projectLis}</ul>
		</div>
		);
	}

};

