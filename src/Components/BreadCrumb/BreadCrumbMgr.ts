import BreadCrumbItem from './BreadCrumbItem';
import UpdateMgr from '../UpdateMgr';

export interface ICrumb {
	name: string;
	id: string;
}

class BreadCrumbMgr extends UpdateMgr {
	constructor(crumbs?: Array<BreadCrumbItem>) {
		super();
		this._crumbs = crumbs || [this.defaultCrumb];
	}

	/**
	 * BreadCrumbMgr Properties
	 */
	// ===== Start Private Properties ===== //
	private _crumbs: Array<BreadCrumbItem>;
	private _version: number = 1;
	// ===== End Private Properties ===== //

	/**
	 * Getters
	 */
	get version() {
		return this._version;
	}
	// ===== End Getters ===== //

	/**
	 * Setters
	 */
	// ===== End Setters ===== //

	// ===== Start Public Properties ===== //
	public defaultCrumb: BreadCrumbItem = new BreadCrumbItem('root', 'abc');
	public crumbHistory: Array<{
		version: number;
		crumbs: Array<BreadCrumbItem>;
	}> = [];
	__proto__: any;
	// ===== End Public Properties ===== //

	/**
	 * BreadCrumbMgr Methods
	 */
	// ===== Start Private Methods ===== //
	private _addToCrumbHistory() {
		const currentCrumbHistory = this.crumbHistory.map(crumb => crumb);
		let newVersionNum: number;
		if (currentCrumbHistory.length > 0) {
			newVersionNum =
				currentCrumbHistory[currentCrumbHistory.length - 1].version + 1;
		} else {
			newVersionNum = 0;
		}
		const newHistoryItem = {
			version: newVersionNum,
			crumbs: this.getCrumbs().map(crumb => crumb)
		};

		currentCrumbHistory.push(newHistoryItem);
		this.crumbHistory = currentCrumbHistory;
	}

	private _publishUpdate() {
		this._version = this._version + 1;

		this.publishUpdate(this._version);
	}
	// ===== End Private Methods ===== //

	// ===== Start Public Methods ===== //
	public handleUpdate() {
		this._publishUpdate();
	}

	public publishUpdate(version: number) {
		console.warn(
			'The updates to BreadCrumbMgr are only occuring internally. The %cpublishUpdate%c method must be overwritten in order for updates to render.',
			'font-style:italic;',
			'font-style:normal;'
		);
	}

	public add(crumb: BreadCrumbItem) {
		this._addToCrumbHistory();
		this._crumbs.push(crumb);
		this._publishUpdate();
		return this._crumbs;
	}

	public remove(crumbIdToRemove: string) {
		this._addToCrumbHistory();
		let updatedCrumbs = this._crumbs.filter(
			crumb => crumb.id !== crumbIdToRemove
		);
		if (!updatedCrumbs) {
			updatedCrumbs = [this.defaultCrumb];
		}
		// @ts-ignore
		this._crumbs = updatedCrumbs;
		this._publishUpdate();
		return this._crumbs;
	}

	public getCrumbs() {
		return this._crumbs;
	}
	// ===== End Public Methods ===== //
}

export default BreadCrumbMgr;
