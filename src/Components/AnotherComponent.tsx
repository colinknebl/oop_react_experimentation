import React from 'react';
import { AppBreadCrumbMgr } from '../index';
import BreadCrumbItem from './BreadCrumb/BreadCrumbItem';

class AnotherComponent extends React.Component {
	render() {
		console.log(AppBreadCrumbMgr.getCrumbs());

		return <button onClick={this.addBc}>Add Another Crumb</button>;
	}

	addBc() {
		AppBreadCrumbMgr.add(
			new BreadCrumbItem('crumb from another component', 'asdfsadf')
		);
	}
}

export default AnotherComponent;
