import React from 'react';
import './App.css';
import { AppBreadCrumbMgr } from './index';
import BreadCrumbMgr from './Components/BreadCrumb/BreadCrumbMgr';
import BreadCrumbItem from './Components/BreadCrumb/BreadCrumbItem';
import BreadCrumbView from './Components/BreadCrumb/BreadCrumbView';
import AnotherComponent from './Components/AnotherComponent';

declare var window: any;

export interface VersionKeys {
	breadCrumbVersion: number;
}

interface IState extends VersionKeys {
	Managers: {
		BreadCrumbMgr: BreadCrumbMgr;
	};
}

class App extends React.Component<any> {
	constructor(props: any) {
		super(props);
		/**
		 * These are only here so it makes it easier to inspect in the console
		 */
		window.App = this;
		window.AppBreadCrumb = AppBreadCrumbMgr;

		AppBreadCrumbMgr.publishUpdate = this._updateVersion.bind(
			this,
			'breadCrumbVersion'
		);
	}

	state: IState = {
		breadCrumbVersion: AppBreadCrumbMgr.version,
		Managers: {
			BreadCrumbMgr: AppBreadCrumbMgr
		}
	};

	updateState(newState: any) {
		this.setState(newState || {});
	}

	private _updateVersion(key: keyof VersionKeys, versionNum: number) {
		this.setState({ [key]: versionNum });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<button onClick={this.addCrumbHandler}>Add Crumb</button>
					<AnotherComponent />
					<BreadCrumbView
						breadCrumbVersion={this.state.breadCrumbVersion}
					/>
				</header>
			</div>
		);
	}

	addCrumbHandler = () => {
		AppBreadCrumbMgr.add(new BreadCrumbItem('Appliances', 'asdf'));
	};
}

export default App;
