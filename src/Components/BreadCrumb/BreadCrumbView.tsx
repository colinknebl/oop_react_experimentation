import React from 'react';
import { AppBreadCrumbMgr } from '../../index';

export interface IBreadCrumbViewProps {
	breadCrumbVersion: number;
}

class BreadCrumbView extends React.PureComponent<IBreadCrumbViewProps, any> {
	render() {
		return (
			<>
				<p>CRUMBS:</p>
				{AppBreadCrumbMgr.getCrumbs().map(crumb => (
					<span key={crumb.name}>{crumb.name}</span>
				))}
			</>
		);
	}
}

export default BreadCrumbView;
