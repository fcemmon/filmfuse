import { computed, observable } from 'mobx';
import fetch from 'isomorphic-fetch';

class Project {
	@observable name;
	@observable slug;
	@observable details;
	@observable id;

	constructor(name) {
		this.name = name;
		this.id = Date.now();
		this.details = 'Need details';
	}
}

class ProjectStore {
	@observable fetched = 'no';
	@observable projects = []
	@observable filter = ''

	@computed get filteredProjects() {
		var matchesFilter = new RegExp(this.filter, "i")
		return this.projects.filter(project => !this.filter || matchesFilter.test(project.name))
	}

	fetchData() {
	    fetch('/api/projects')
	    	.then((response) => {
	    		this.fetched = "yes";
	    		return response.json()
	    	})
	    	.then((json) => {
	    		console.log(json);
	    	})
	    	.catch(() => this.fetched = "no");
	}

	createProject(name) {
		this.projects.push(new Project(name))
	}
}

const projectStore = window.projectStore = new ProjectStore();

export default projectStore;
